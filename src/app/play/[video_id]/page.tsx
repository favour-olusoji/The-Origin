"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaExpand,
  FaCompress,
  FaClosedCaptioning,
  FaArrowLeft,
} from "react-icons/fa";
import SubtitleDrawer from "@/components/Play/SubtitleDrawer";
import SubtitleText from "@/components/Play/Subtitles";
import { DictionaryDrawer } from "@/components/Play/DictionaryDrawer";
import { DictionaryCard } from "@/components/Play/DictionaryCard";
import {
  getMovieById,
  IMoviesInterface,
  IMovieSubtitles,
} from "@/services/movieData";
import getWordMeaning from "@/utils/getWordMeaningJSON";
import getWordMeaningMini from "@/utils/getWordMeaningMini";
import Link from "next/link";

const VideoPlayer = ({ params }: { params: { video_id: string } }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const volumeRef = useRef(null);
  const [currentId] = useState(parseInt(params.video_id));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showCaptionsSidebar, setShowCaptionsSidebar] = useState(false);
  const [openDictionaryDrawer, setOpenDictionaryDrawer] = useState(false);
  const [openDictionaryCard, setOpenDictionaryCard] = useState(false);
  const [clickedWord, setClickedWord] = useState("");
  const [clickedWordLanguage, setClickedWordLanguage] = useState("");
  const [clickedWordConvertTo, setClickedWordConvertTo] = useState("");
  const [primarySubtitles, setPrimarySubtitles] = useState([]);
  const [secondarySubtitles, setSecondarySubtitles] = useState([]);
  const [currentPrimarySubtitleSnippet, setCurrentPrimarySubtitleSnippet] =
    useState<string>("");
  const [currentSecondarySubtitleSnippet, setCurrentSecondarySubtitleSnippet] =
    useState<string>("");
  const [selectedPrimarySubtitle, setSelectedPrimarySubtitle] =
    useState<IMovieSubtitles | null>(null);
  const [selectedSecondarySubtitle, setSelectedSecondarySubtitle] =
    useState<IMovieSubtitles | null>(null);
  const [selectedMovie] = useState<IMoviesInterface>(getMovieById(currentId));
  const [dictionaryWordData, setDictionaryWordData] = useState(null);
  const [miniDictionaryWordData, setMiniDictionaryWordData] = useState(null);
  const [wordMeaningLoading, setWordMeaningLoading] = useState(false);

  useEffect(() => {
    const primarySub = selectedMovie.subtitles?.[0]?.language;
    const secondarySub = selectedMovie.subtitles?.[1]?.language;

    if (primarySub) {
      onPrimarySubtitleChange(primarySub);
    }
    if (secondarySub) {
      onSecondarySubtitleChange(secondarySub);
    }
  }, [selectedMovie]);

  useEffect(() => {
    const primarySubtitle = selectedPrimarySubtitle?.url;
    const secondarySubtitle = selectedSecondarySubtitle?.url;

    if (primarySubtitle) {
      fetch(primarySubtitle)
        .then((response) => response.text())
        .then((text) => {
          const parsedSubtitles = parseVTT(text);
          setPrimarySubtitles(parsedSubtitles);
        })
        .catch((error) => console.error("Error loading subtitles:", error));
    } else {
      console.warn("Subtitle source not found in URL");
    }

    if (secondarySubtitle) {
      fetch(secondarySubtitle)
        .then((response) => response.text())
        .then((text) => {
          const parsedSubtitles = parseVTT(text);
          setSecondarySubtitles(parsedSubtitles);
        })
        .catch((error) => console.error("Error loading subtitles:", error));
    } else {
      console.warn("Subtitle source not found in URL");
    }
  }, [selectedPrimarySubtitle, selectedSecondarySubtitle]);

  const parseVTT = (text: string) => {
    const subtitleLines = text.split("\n\n");
    const subtitlesArray = [];

    subtitleLines.forEach((line) => {
      const [time, ...subtitleText] = line.split("\n");
      const [start, end] = time.split(" --> ").map((t) => parseTime(t));
      const text = subtitleText.join(" ");
      subtitlesArray.push({ start, end, text });
    });

    return subtitlesArray;
  };

  const parseTime = (timeString: string) => {
    const [hours, minutes, seconds] = timeString.split(":").map(parseFloat);
    return hours * 3600 + minutes * 60 + seconds;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const primarySub = primarySubtitles.find(
          (sub) => currentTime >= sub.start && currentTime <= sub.end,
        );
        const secondarySub = secondarySubtitles.find(
          (sub) => currentTime >= sub.start && currentTime <= sub.end,
        );
        setCurrentPrimarySubtitleSnippet(primarySub ? primarySub.text : "");
        setCurrentSecondarySubtitleSnippet(
          secondarySub ? secondarySub.text : "",
        );
      }
    }, 500); // Update every 500ms

    return () => clearInterval(interval);
  }, [primarySubtitles, secondarySubtitles]);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const percentage =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    progressRef.current.style.width = `${percentage}%`;
  };

  const handleProgressClick = (e) => {
    const containerWidth = e.currentTarget.offsetWidth;
    const clickX = e.nativeEvent.offsetX;
    const newTime = (clickX / containerWidth) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener("timeupdate", handleProgress);
    return () => {
      videoElement.removeEventListener("timeupdate", handleProgress);
    };
  }, []);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      videoRef.current.requestFullscreen().catch((err) => {
        console.log(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
        );
      });
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const toggleCaptionsSidebar = () => {
    setShowCaptionsSidebar(!showCaptionsSidebar);
  };

  const toggleDictionarySidebar = () => {
    setOpenDictionaryDrawer(!openDictionaryDrawer);
  };

  const toggleDictionaryCard = () => {
    setOpenDictionaryCard(!openDictionaryCard);
  };

  const handleWordClick = async (
    word: string,
    language: string,
    convertto: string,
  ) => {
    setOpenDictionaryCard(false);
    setOpenDictionaryDrawer(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setClickedWord(word);
    setClickedWordLanguage(language);
    setClickedWordConvertTo(convertto);
    setOpenDictionaryCard(true);

    setWordMeaningLoading(true);
    const wordData = await getWordMeaning(
      word,
      clickedWordLanguage,
      selectedMovie?.category,
    );
    const miniWordData = await getWordMeaningMini(
      word,
      clickedWordLanguage,
      selectedMovie?.category,
    );
    setWordMeaningLoading(false);
    setDictionaryWordData(wordData);
    setMiniDictionaryWordData(miniWordData);
  };

  const onPrimarySubtitleChange = (subtitleLanguage: string | null) => {
    if (!subtitleLanguage) {
      setSelectedPrimarySubtitle(null);
      return;
    }
    const selectedSubtitle = selectedMovie.subtitles.find(
      (subtitle) => subtitle.language === subtitleLanguage,
    );
    setSelectedPrimarySubtitle(selectedSubtitle);
  };

  const onSecondarySubtitleChange = (subtitleLanguage: string | null) => {
    if (!subtitleLanguage) {
      setSelectedSecondarySubtitle(null);
      return;
    }
    const selectedSubtitle = selectedMovie.subtitles.find(
      (subtitle) => subtitle.language === subtitleLanguage,
    );
    setSelectedSecondarySubtitle(selectedSubtitle);
  };

  return (
    <>
      <div>
        <Link
          href="/watch"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <FaArrowLeft style={{ marginRight: "0.5rem" }} />
          Back
        </Link>
      </div>
      {openDictionaryCard && (
        <DictionaryCard
          toggleDictionaryCard={toggleDictionaryCard}
          toggleDictionaryDrawer={toggleDictionarySidebar}
          clickedWord={clickedWord}
          wordData={miniDictionaryWordData}
          wordMeaningLoading={wordMeaningLoading}
        />
      )}
      <div className="video-container w-full">
        {/* The video */}
        <video
          ref={videoRef}
          onTimeUpdate={handleProgress}
          className="video-element"
        >
          {/* Video source */}
          <source src={selectedMovie?.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtitle text component */}
        {selectedPrimarySubtitle && (
          <SubtitleText
            handleWordClick={handleWordClick}
            language={selectedPrimarySubtitle?.language}
            currentSubtitle={currentPrimarySubtitleSnippet}
            convertto={selectedPrimarySubtitle?.convertto}
            style={{ position: "absolute", bottom: "80px" }}
          />
        )}

        {selectedSecondarySubtitle && (
          <SubtitleText
            handleWordClick={handleWordClick}
            language={selectedSecondarySubtitle?.language}
            currentSubtitle={currentSecondarySubtitleSnippet}
            convertto={selectedSecondarySubtitle?.convertto}
            style={{ position: "absolute", bottom: "50px", color: "#f41b3be6" }}
          />
        )}

        {/* Controls */}
        <div
          className={`controls absolute bottom-0 flex w-full items-center justify-between bg-gray-800 bg-opacity-75 p-4 ${showCaptionsSidebar ? "opacity-50" : "opacity-100"}`}
        >
          <button onClick={togglePlayPause} className="text-white">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div className="progress-container relative mx-4 h-2 flex-grow bg-gray-600" onClick={handleProgressClick}>
            <div
              ref={progressRef}
              className="progress-bar absolute left-0 top-0 h-full bg-red-600"
              style={{ width: "0%" }}
            ></div>
          </div>
          <div className="flex items-center">
            <FaVolumeUp className="mr-2 text-white" />
            <input
              ref={volumeRef}
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
          <button onClick={toggleFullscreen} className="ml-4 text-white">
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button onClick={toggleCaptionsSidebar} className="ml-4 text-white">
            <FaClosedCaptioning />
          </button>
        </div>

        {showCaptionsSidebar && (
          <SubtitleDrawer
            selectedPrimarySubtitle={selectedPrimarySubtitle}
            selectedSecondarySubtitle={selectedSecondarySubtitle}
            onPrimarySubtitleChange={onPrimarySubtitleChange}
            onSecondarySubtitleChange={onSecondarySubtitleChange}
            toggleCaptionsSidebar={toggleCaptionsSidebar}
            movieData={selectedMovie}
          />
        )}

        {openDictionaryDrawer && (
          <DictionaryDrawer
            currentLanguage={clickedWordLanguage}
            targetLanguage={clickedWordConvertTo}
            toggleDictionarySidebar={toggleDictionarySidebar}
            clickedWord={clickedWord}
            wordData={dictionaryWordData}
            clickedWordLanguage={clickedWordLanguage}
            wordMeaningLoading={wordMeaningLoading}
            selectedMovie={selectedMovie}
          />
        )}

        {/* CSS .....will probably move it later */}
        <style jsx>{`
          .video-container {
            position: relative;
            width: 100%;
            margin: auto;
            overflow: hidden;
            display: flex;
            justify-content: center;
          }
          .video-element {
            height: 100vh;
          }
          .controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(0, 0, 0, 0.75);
            padding: 10px;
            position: absolute;
            bottom: 0;
            width: 100%;
          }
          .progress-container {
            flex-grow: 1;
            margin: 0 10px;
            height: 5px;
            background: rgba(255, 255, 255, 0.3);
            position: relative;
          }
          .progress-bar {
            height: 100%;
            background: red;
            width: 0;
          }
          .volume-slider {
            appearance: none;
            width: 100px;
            height: 5px;
            background: #fff;
            border-radius: 5px;
            cursor: pointer;
          }
          .captions-sidebar {
            display: block;
          }
        `}</style>
      </div>
    </>
  );
};

export default VideoPlayer;
