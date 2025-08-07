'use client';

import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import Filters from '../../components/Filters';
import MovieList from '../../components/MovieList';
import Pagination from '../../components/Pagination';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage'; 
import { Movie } from '../../types/movie';
import { searchMovies } from '../../utils/api';


export default function HomePage() {  
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [page, setPage] = useState(1);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query.trim() === '') {
      setMovies([]);
      setTotalResults(0);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await searchMovies(query, type, year, page);
        if (data.Response === 'True') {
          setMovies(data.Search);
          setTotalResults(parseInt(data.totalResults));
        } else {
          setMovies([]);
          setTotalResults(0);
          setError(data.Error || 'No results found.');
        }
      } catch (err: any) {
        setError('Failed to fetch data. Try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, type, year, page]);

  const handleSearch = (term: string) => {
    setQuery(term);
    setPage(1); // reset pagination
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 OMDb Movie Explorer</h1>

      <SearchBar onSearch={handleSearch} />
      <Filters type={type} year={year} setType={setType} setYear={setYear} />

      {loading && <Loader />}
      {error && !loading && <ErrorMessage message={error} />}

      {!loading && !error && movies.length > 0 && (
        <>
          <MovieList movies={movies} />
          <Pagination currentPage={page} totalResults={totalResults} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
}
