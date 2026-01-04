import React, { useEffect} from 'react'
import Spinner from '../components/Spinner'
import useGif from '@/hooks/useGif';

const Random = () => {
  
  const {gifUrl, loading, fetchData} = useGif();

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-purple-100 mt-10">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8 drop-shadow-md">
        Random GIF Generator
      </h1>

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

      <button
        onClick={() => fetchData()}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        Generate
      </button>
    </div>
  )
}

export default Random