import { getMovieDetails } from "../../../../utils/api";
import { MovieDetails } from "../../../../types/movie";
import Image from "next/image";
import Link from "next/link";

export default async function MovieDetailsPage({
  params,
}: {
  params:Promise< { id: string }>
}) {
  const { id } = await params;
  const data: MovieDetails = await getMovieDetails(id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={data.Poster !== "N/A" ? data.Poster.replace("http:", "https:") : "/no-image.jpg"}
          alt={data.Title}
          width={300}
          height={450}
          className="rounded shadow"
        />

        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold">{data.Title}</h1>
          <p><strong>Plot:</strong> {data.Plot}</p>
          <p><strong>Actors:</strong> {data.Actors}</p>
          <p><strong>Genre:</strong> {data.Genre}</p>
          <p><strong>Released:</strong> {data.Released}</p>
          <p><strong>Rated:</strong> {data.Rated}</p>
          <p><strong>Director:</strong> {data.Director}</p>
          <p><strong>Writer:</strong> {data.Writer}</p>
          <p><strong>Language:</strong> {data.Language}</p>
          <p><strong>Country:</strong> {data.Country}</p>
          <p><strong>Awards:</strong> {data.Awards}</p>
          <p><strong>IMDb Rating:</strong> ⭐ {data.imdbRating}</p>

          {data.Ratings?.length > 0 && (
            <div>
              <strong>Ratings:</strong>
              <ul className="list-disc list-inside">
                {data.Ratings.map((r, i) => (
                  <li key={i}>
                    {r.Source}: {r.Value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Link href="/" className="text-blue-600 underline mt-6 block">
        ← Back to Search
      </Link>
    </div>
  );
}
