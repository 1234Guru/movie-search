"use client";

interface Props {
  type: string;
  year: string;
  setType: (val: string) => void;
  setYear: (val: string) => void;
}

export default function Filters({ type, year, setType, setYear }: Props) {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border rounded">
        <option value="">All Types</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>

      <input
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
        className="p-2 border rounded"
      />
    </div>
  );
}
