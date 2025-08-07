import { Movie } from "../types/movie";
import Link from "next/link";
import Image from "next/image";
interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <Link href={`/movie/${movie.imdbID}`} passHref>
      <div className="bg-white border rounded shadow p-2 hover:shadow-lg transition cursor-pointer">
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
          alt={movie.Title}
          className="w-full h-64 object-cover"
        />
        <div className="mt-2">
          <h3 className="text-lg font-semibold">{movie.Title}</h3>
          <p className="text-sm text-gray-500">
            {movie.Type} | {movie.Year}
          </p>
        </div>
      </div>
    </Link>
  );
}
