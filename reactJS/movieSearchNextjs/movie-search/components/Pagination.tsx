"use client";

interface Props {
  currentPage: number;
  totalResults: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalResults, onPageChange }: Props) {
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="flex gap-4 justify-center mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span>Page {currentPage} / {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
