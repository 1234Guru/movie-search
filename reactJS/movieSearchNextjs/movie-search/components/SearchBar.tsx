"use client";
import { useState } from "react";

interface Props {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form  className="flex gap-2">
      <input
        className="border p-2 rounded w-full"
        placeholder="Search movie or series..."
        value={term}
        onChange={(e) => {setTerm(e.target.value); handleSubmit(e)}}
      />
     
    </form>
  );
}
