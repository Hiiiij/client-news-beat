'use client';
import React, { useState } from 'react';
interface SearchBarProps {
  onSearch: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news..."
        className="border p-2 flex-grow"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Search
      </button>
    </form>
  );
};
export default SearchBar;