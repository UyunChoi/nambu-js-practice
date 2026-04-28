import { useEffect, useState } from "react";
import { card, container, image, title, type Movie, type MovieResponse } from '../types/Movie';

const url = 'https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json';

const MovieInfo = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [err, setErr] = useState<string|null>(null);


  useEffect(()=>{
    const movieList = async() => {
      try {
        const res = await fetch(url);
        if(!res.ok){
          throw new Error('요청 실패');
        }
        const movieData:MovieResponse = await res.json();
        setMovies(movieData.movies);
      } catch (error) {
        if(error instanceof Error) {
          setErr(error.message);
        }
      }
    };
    movieList();
  },[movies]);
  
  if(err){
    return(
      <>
        <p>{err}</p>
      </>
    );
  }
  return(
    <div style={container}>
        {movies.map((movie)=>(
          <div style={card} key={movie.id}>
            <p style={title}>{movie.title}</p>
            <img src={movie.poster} alt={movie.title} style={image}/>
          </div>
        ))}
    </div>
  );
}; 

export default MovieInfo;