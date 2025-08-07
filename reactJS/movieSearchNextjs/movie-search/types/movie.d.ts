export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: "movie" | "series";
  Poster: string;
}

export interface MovieDetails extends Movie {
  Rated: string;
  Released: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: { Source: string; Value: string }[];
  imdbRating: string;
}
