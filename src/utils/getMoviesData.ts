import fs from 'fs';
import path from 'path';

export interface MovieData {
  language: string;
  movie: string;
  video: string;
  subtitle: string;
  thumbnail: string;
  otherFiles?: string[];
}

export const getMoviesData = (): MovieData[] => {
  const moviesDir = path.join(process.cwd(), 'public/movie_library');
  const languages = fs.readdirSync(moviesDir);

  const moviesData: MovieData[] = [];

  languages.forEach((language) => {
    const languagePath = path.join(moviesDir, language);
    if (fs.lstatSync(languagePath).isDirectory()) {
      const movies = fs.readdirSync(languagePath);

      movies.forEach((movie) => {
        const moviePath = path.join(languagePath, movie);
        if (fs.lstatSync(moviePath).isDirectory()) {
          const video = fs.existsSync(path.join(moviePath, 'video.mp4'))
            ? path.join('/movie_library', language, movie, 'video.mp4')
            : '';
          const subtitle = fs.existsSync(path.join(moviePath, 'subtitles.vtt'))
            ? path.join('/movie_library', language, movie, 'subtitles.vtt')
            : '';
          const thumbnail = fs.existsSync(path.join(moviePath, 'thumbnail.png'))
            ? path.join('/movie_library', language, movie, 'thumbnail.png')
            : '';

          const otherFiles = fs.readdirSync(moviePath).filter((file) => {
            return file !== 'video.mp4' && file !== 'subtitles.vtt' && file !== 'thumbnail.png';
          });

          moviesData.push({
            language,
            movie,
            video,
            subtitle,
            thumbnail,
            otherFiles: otherFiles.map((file) => path.join('/movie_library', language, movie, file)),
          });
        }
      });
    }
  });

  return moviesData;
};
