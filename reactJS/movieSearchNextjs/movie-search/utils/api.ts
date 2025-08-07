const API_URL = process.env.NEXT_PUBLIC_OMDB_API_URL || "https://www.omdbapi.com/";
const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export async function searchMovies(query: string, type: string, year: string, page: number) {
  const url = new URL(API_URL);
  url.searchParams.append("apikey", API_KEY!);
  url.searchParams.append("s", query);
  if (type) url.searchParams.append("type", type);
  if (year) url.searchParams.append("y", year);
  url.searchParams.append("page", String(page));

  const res = await fetch(url.toString());
  return res.json();
}

export async function getMovieDetails(id: string) {
  const url = new URL(API_URL);
  url.searchParams.append("apikey", API_KEY!);
  url.searchParams.append("i", id);
  const res = await fetch(url.toString());
  return res.json();
}
