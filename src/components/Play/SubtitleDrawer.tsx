import { XClose } from "@/components/Common/ReusableSvgs";
import { IMoviesInterface, IMovieSubtitles } from "@/services/movieData";
import React from "react";

const SubtitleDrawer = (props: {
  toggleCaptionsSidebar: any;
  movieData: IMoviesInterface;
  onPrimarySubtitleChange: (subtitle: string | null) => void;
  onSecondarySubtitleChange: (subtitle: string | null) => void;
  selectedPrimarySubtitle: IMovieSubtitles;
  selectedSecondarySubtitle: IMovieSubtitles;
}) => {
  const onPrimarySubtitleChange = (e) => {
    props.onPrimarySubtitleChange(e.target.value);
  };

  const onSecondarySubtitleChange = (e) => {
    props.onSecondarySubtitleChange(e.target.value);
  };

  return (
    <>
      <div className="captions-sidebar absolute right-0 top-0 flex h-full w-3/12 justify-center bg-black bg-opacity-70 px-10 py-6 text-white">
        <div className="subtitle-settings w-full">
          <div
            onClick={props.toggleCaptionsSidebar}
            className="flex cursor-pointer justify-end"
          >
            <XClose />
          </div>

          <h2 className="mb-4 text-lg text-white">Language Subtitle</h2>
          <SubtitleSelect
            value={props.selectedPrimarySubtitle?.language}
            onChange={onPrimarySubtitleChange}
            label="Select Primary Subtitle"
            options={[
              { label: "Off", value: "off" },
              ...props.movieData.subtitles.map((subtitle) => ({
                label: subtitle.language,
                value: subtitle.language,
              })),
            ]}
          />

          <SubtitleSelect
            value={props.selectedSecondarySubtitle?.language}
            onChange={onSecondarySubtitleChange}
            label="Select Secondary Subtitle"
            options={[
              { label: "Off", value: "" },
              ...props.movieData.subtitles.map((subtitle) => ({
                label: subtitle.language,
                value: subtitle.language,
              })),
            ]}
          />

          {/* <div className="text-settings mb-4">
            <h2 className="mb-4 text-lg text-white">Text Settings</h2>
            <label className="mb-2 block text-sm">Font Size</label>
            <div className="mb-4 flex gap-5 text-sm">
              <span
                className="font-size-example text-gray-400"
                style={{ fontSize: "0.75rem" }}
              >
                Aa
              </span>
              <span
                className="font-size-example text-gray-400"
                style={{ fontSize: "1rem" }}
              >
                Aa
              </span>
              <span
                className="font-size-example text-white"
                style={{ fontSize: "1.25rem" }}
              >
                Aa
              </span>
              <span
                className="font-size-example text-gray-400"
                style={{ fontSize: "1.5rem" }}
              >
                Aa
              </span>
            </div>
            <label className="mb-2 block text-sm">Subtitle Preset</label>
            <div className="flex gap-6">
              <button className="subtitle-preset cursor-pointer rounded border-2 border-solid border-white bg-black px-3 py-2">
                Aa
              </button>
              <button className="subtitle-preset cursor-pointer rounded px-3 py-2">
                Aa
              </button>
              <button className="subtitle-preset cursor-pointer rounded bg-black px-3 py-2 text-yellow-400">
                Aa
              </button>
              <button className="subtitle-preset cursor-pointer rounded bg-gray-400 px-3 py-2 text-black">
                Aa
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SubtitleDrawer;

export const SubtitleSelect = ({ label, options, onChange, value }) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm text-white">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="flex w-full items-center justify-center rounded-full border border-gray-700 bg-black bg-opacity-50 p-4 text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
