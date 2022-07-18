import React, {useState, useEffect} from 'react'
import Image from '../banner.jpg'
import axios from 'axios'

function Banner() {
  let [movies, setMovies] = useState({});

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=dd2d2f57a337c59e3e91a6893f593b74')
    .then((res) => 
      {
        console.table(res.data.results)
        setMovies(res.data.results[0])
      }
    )
  }, [])


  return (
    <>
        <div className={`bg-[url('https://image.tmdb.org/t/p/original/${movies.backdrop_path}')] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end `}>
            
            <div className='text-xl md:text-3xl text-white 
                p-4 
                bg-gray-900 bg-opacity-50
                w-full
                flex justify-center'>
                {movies.title}
            </div>

        </div>
    </>
  )
}

export default Banner