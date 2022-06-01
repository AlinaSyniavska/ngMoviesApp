import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  movies: `${API}/discover/movie`,
  movie: `${API}/movie`,
  genres: `${API}/genre/movie/list`,
  search: `${API}/search/keyword`
}

export const urlPoster = 'https://image.tmdb.org/t/p/w500';
