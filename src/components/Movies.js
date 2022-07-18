import React, {useState, useEffect} from 'react'
import Image from '../banner.jpg'
import axios from 'axios'
import { Oval } from  'react-loader-spinner';
import Pagination from './Pagination';

function Movies() {

  let [favourites, setFavourites] = useState([]);

  let [hover, setHover] = useState('');

  let [page, setPage] = useState(1);
  function goNext(){
    setPage(page + 1);
  }
  function goBack(){
    if(page > 1)
      setPage(page - 1);
  }

  let [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=dd2d2f57a337c59e3e91a6893f593b74&page=${page}`)
    .then((res) => 
      {
        // console.table(res.data.results)
        setMovies(res.data.results)
        let oldFav = localStorage.getItem("imdb");
        oldFav = JSON.parse(oldFav) || [];
        setFavourites([...oldFav]);
      }
    )
  }, [page])
  
  let add = (movie) => {
    let newArray = [...favourites, movie]
    setFavourites([...newArray]);
    console.log(newArray);
    localStorage.setItem("imdb", JSON.stringify(newArray));

  }


  let del = (movie) => {
    let newArray = favourites.filter((m) => m.id !== movie.id)
    setFavourites([...newArray]);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  }

  return (
    <div className='mt-5'>
        <div className='mb-8'>
            <div className='mb-8 font-bold text-2xl text-center text-blue-400'>Trending Movies</div>
            {
              movies.length === 0 ? 
              <div className='flex justify-center'>
              <Oval
                height="100"
                width="100"
                color='#91BAD6'
                secondaryColor='#91BAD6'
                ariaLabel='loading'
              /> 
              </div>: 
            
            <div className='flex flex-wrap justify-center'>
              {movies.map((movie) => (
                <div className={`bg-[url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')] 
                                md:h-[30vh] md:w-[250px]
                                h-[25vh] w-[150px]
                                bg-center bg-cover 
                                rounded-xl
                                flex items-end
                                m-4
                                hover:scale-110
                                ease-out duration-300
                                relative
                                `}
                                
                                onMouseLeave={() => setHover('')}
                                onMouseEnter={() => {
                                  setHover(movie.id)
                                }}
                                >
                                {
                                  hover===movie.id && <> {
                                      !favourites.find((m) => m.id === movie.id) ? 
                                    <div className=
                                'absolute top-2 right-2 text-xl bg-gray-800 p-2 rounded-xl cursor-pointer'
                                onClick={() => add(movie)} >
                                💝</div> : 
                                <div className=
                                'absolute top-2 right-2 text-xl bg-gray-800 p-2 rounded-xl cursor-pointer'
                                onClick={() => del(movie)}>
                                ❌</div>
                                    
                                  }
                                  </> 
                                }
                                
                                
                                <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold'>{movie.title}</div>

                </div>
              )) }
                
            </div>
            }
        </div>
        <Pagination page={page} goNext={goNext} goBack={goBack} />
    </div>
  )
}

export default Movies