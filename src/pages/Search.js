import React, { useState } from "react";
import Spinner from '../components/Spinner'
import useGif from '@/hooks/useGif';

const Search = () => {
  const [query, setQuery] = useState("");
  const {gifUrl, loading, fetchData} = useGif(query);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8 drop-shadow-md">
        Search GIFs
      </h1>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md bg-white/70 backdrop-blur-md rounded-full shadow-lg overflow-hidden border border-white/40 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for GIFs..."
          className="flex-1 px-5 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          onClick={() => fetchData(query)}>
          Search
        </button>
      </div>

      <div className="min-h-80 min-w-80 flex items-center justify-center bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 mb-6 overflow-hidden">
        {loading ? (
          (<Spinner />)
        ) : gifUrl ? (
          <img
            src={gifUrl}
            alt="Random GIF"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <p className="text-gray-500">No GIF found</p>
        )}
      </div>
    </div>
  );
};

export default Search;