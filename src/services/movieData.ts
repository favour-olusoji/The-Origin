// import path from "path";

// const movieLibraryPath = path.join(process.cwd(), "public", "movie_library");
const movieLibraryPath = "/movie_library";

export interface IMovieSubtitles {
  language: string;
  convertto: string;
  url: string;
}

export interface IMoviesInterface {
  id: number;
  category: string;
  video: string;
  thumbnail: string;
  title: string;
  subtitles: IMovieSubtitles[];
}

export const moviesList: IMoviesInterface[] = [
  // {
  //   id: 1,
  //   category: "English",
  //   video: `${movieLibraryPath}/English/house_of_dragons1e1/video.mp4`,
  //   thumbnail: `${movieLibraryPath}/English/house_of_dragons1e1/thumbnail.png`,
  //   title: "House of Dragons S1E1",
  //   subtitles: [
  //     {
  //       language: "English",
  //       convertto: "Spanish",
  //       url: `${movieLibraryPath}/English/house_of_dragons1e1/en.vtt`,
  //     },
  //     {
  //       language: "Spanish",
  //       convertto: "English",
  //       url: `${movieLibraryPath}/English/house_of_dragons1e1/sp.vtt`,
  //     },
  //   ],
  // },  
  {
    id: 1,
    category: "French",
    video: `${movieLibraryPath}/French/dropsofgods1e1/video.mp4`,
    thumbnail: `${movieLibraryPath}/French/dropsofgods1e1/thumbnail.png`,
    title: "Drops of God S1E1",
    subtitles: [
      {
        language: "English",
        convertto: "French",
        url: `${movieLibraryPath}/French/dropsofgods1e1/en.vtt`,
      },
      {
        language: "French",
        convertto: "English",
        url: `${movieLibraryPath}/French/dropsofgods1e1/fr.vtt`,
      },
    ],
  },
  {
    id: 2,
    category: "French",
    video: `${movieLibraryPath}/French/dropsofgods1e2/video.mp4`,
    thumbnail: `${movieLibraryPath}/French/dropsofgods1e2/thumbnail.png`,
    title: "Drops of God S1E2",
    subtitles: [
      {
        language: "English",
        convertto: "French",
        url: `${movieLibraryPath}/French/dropsofgods1e2/en.vtt`,
      },
      {
        language: "French",
        convertto: "English",
        url: `${movieLibraryPath}/French/dropsofgods1e2/fr.vtt`,
      },
    ],
  },
  {
    id: 3,
    category: "French",
    video: `${movieLibraryPath}/French/dropsofgods1e3/video.mp4`,
    thumbnail: `${movieLibraryPath}/French/dropsofgods1e3/thumbnail.png`,
    title: "Drops of God S1E3",
    subtitles: [
      {
        language: "English",
        convertto: "French",
        url: `${movieLibraryPath}/French/dropsofgods1e3/en.vtt`,
      },
      {
        language: "French",
        convertto: "English",
        url: `${movieLibraryPath}/French/dropsofgods1e3/fr.vtt`,
      },
    ],
  },
  {
    id: 4,
    category: "French",
    video: `${movieLibraryPath}/French/dropsofgods1e4/video.mp4`,
    thumbnail: `${movieLibraryPath}/French/dropsofgods1e4/thumbnail.png`,
    title: "Drops of God S1E4",
    subtitles: [
      {
        language: "English",
        convertto: "French",
        url: `${movieLibraryPath}/French/dropsofgods1e4/en.vtt`,
      },
      {
        language: "French",
        convertto: "English",
        url: `${movieLibraryPath}/French/dropsofgods1e4/fr.vtt`,
      },
    ],
  },
  {
    id: 5,
    category: "Spanish",
    video: `${movieLibraryPath}/Spanish/griseldas1e1/video.mp4`,
    thumbnail: `${movieLibraryPath}/Spanish/griseldas1e1/thumbnail.png`,
    title: "Griselda S1E1",
    subtitles: [
      {
        language: "English",
        convertto: "Spanish",
        url: `${movieLibraryPath}/Spanish/griseldas1e1/en.vtt`,
      },
      {
        language: "Spanish",
        convertto: "English",
        url: `${movieLibraryPath}/Spanish/griseldas1e1/sp.vtt`,
      },
    ],
  },
  {
    id: 6,
    category: "Spanish",
    video: `${movieLibraryPath}/Spanish/griseldas1e2/video.mp4`,
    thumbnail: `${movieLibraryPath}/Spanish/griseldas1e2/thumbnail.png`,
    title: "Griselda S1E2",
    subtitles: [
      {
        language: "English",
        convertto: "Spanish",
        url: `${movieLibraryPath}/Spanish/griseldas1e2/en.vtt`,
      },
      {
        language: "Spanish",
        convertto: "English",
        url: `${movieLibraryPath}/Spanish/griseldas1e2/sp.vtt`,
      },
    ],
  },

  {
    id: 7,
    category: "Spanish",
    video: `${movieLibraryPath}/Spanish/griseldas1e2/video.mp4`,
    thumbnail: `${movieLibraryPath}/Spanish/griseldas1e2/thumbnail.png`,
    title: "Griselda S1E3",
    subtitles: [
      {
        language: "English",
        convertto: "Spanish",
        url: `${movieLibraryPath}/Spanish/griseldas1e3/en.vtt`,
      },
      {
        language: "Spanish",
        convertto: "English",
        url: `${movieLibraryPath}/Spanish/griseldas1e3/sp.vtt`,
      },
    ],
  },

  {
    id: 8,
    category: "Spanish",
    video: `${movieLibraryPath}/Spanish/griseldas1e4/video.mp4`,
    thumbnail: `${movieLibraryPath}/Spanish/griseldas1e4/thumbnail.png`,
    title: "Griselda S1E4",
    subtitles: [
      {
        language: "English",
        convertto: "Spanish",
        url: `${movieLibraryPath}/Spanish/griseldas1e4/en.vtt`,
      },
      {
        language: "Spanish",
        convertto: "English",
        url: `${movieLibraryPath}/Spanish/griseldas1e4/sp.vtt`,
      },
    ],
  },

  {
    id: 9,
    category: "Korean",
    video: `${movieLibraryPath}/Korean/kingdoms1e1/video.mp4`,
    thumbnail: `${movieLibraryPath}/Korean/kingdoms1e1/thumbnail.png`,
    title: "Kingdom S1E1",
    subtitles: [
      {
        language: "English",
        convertto: "Korean",
        url: `${movieLibraryPath}/Korean/kingdoms1e1/en.vtt`,
      },
      {
        language: "Korean",
        convertto: "English",
        url: `${movieLibraryPath}/Korean/kingdoms1e1/kr.vtt`,
      },
    ],
  },
  {
    id: 10,
    category: "Korean",
    video: `${movieLibraryPath}/Korean/kingdoms1e2/video.mp4`,
    thumbnail: `${movieLibraryPath}/Korean/kingdoms1e2/thumbnail.png`,
    title: "Kingdom S1E2",
    subtitles: [
      {
        language: "English",
        convertto: "Korean",
        url: `${movieLibraryPath}/Korean/kingdoms1e2/en.vtt`,
      },
      {
        language: "Korean",
        convertto: "English",
        url: `${movieLibraryPath}/Korean/kingdoms1e2/kr.vtt`,
      },
    ],
  },

  {
    id: 11,
    category: "Korean",
    video: `${movieLibraryPath}/Korean/kingdoms1e2/video.mp4`,
    thumbnail: `${movieLibraryPath}/Korean/kingdoms1e2/thumbnail.png`,
    title: "Kingdom S1E3",
    subtitles: [
      {
        language: "English",
        convertto: "Korean",
        url: `${movieLibraryPath}/Korean/kingdoms1e3/en.vtt`,
      },
      {
        language: "Korean",
        convertto: "English",
        url: `${movieLibraryPath}/Korean/kingdoms1e3/kr.vtt`,
      },
    ],
  },

  {
    id: 12,
    category: "Korean",
    video: `${movieLibraryPath}/Korean/kingdoms1e4/video.mp4`,
    thumbnail: `${movieLibraryPath}/Korean/kingdoms1e4/thumbnail.png`,
    title: "Kingdom S1E4",
    subtitles: [
      {
        language: "English",
        convertto: "Korean",
        url: `${movieLibraryPath}/Korean/kingdoms1e4/en.vtt`,
      },
      {
        language: "Korean",
        convertto: "English",
        url: `${movieLibraryPath}/Korean/kingdoms1e4/kr.vtt`,
      },
    ],
  },
];

export const getMovieById = (id: number): IMoviesInterface | null => {
  return moviesList.find((movie) => movie.id === id) || null;
};

export const generateMoviePageLink = (id: number) => {
  return `/play/${id}`;
};

export const goToMovieWatchPage = (id: number) => {
  location.href = generateMoviePageLink(id);
};
