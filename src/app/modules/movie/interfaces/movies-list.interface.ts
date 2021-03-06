export interface IMovieShortInfo {
      adult: boolean,
      backdrop_path: string,
      genre_ids: string[],
      id: string,
      original_language: string,
      original_title: string,
      overview: string,
      popularity: number,
      poster_path: string,
      release_date: string,
      title: string,
      video: boolean,
      vote_average: number,
}

export interface IMoviesList {
  page: number
  results: IMovieShortInfo[]
  total_pages: number,
  total_results: number
}
