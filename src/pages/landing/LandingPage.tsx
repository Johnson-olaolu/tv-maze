import React, { useEffect, useState } from "react";
import "./style.scss";
import MovieCard from "../../components/movie-card/MoviesCard";
import { IMovie } from "../../interface/Movie";
import { movieService } from "../../services/movieService";

const LandingPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(()=> {
    movieService.getMovieSchedule()
      .then(res => {
        setMovies(res)
      })
      .catch(err => {
        console.error(err)
      })
  },[])
  return (
    <>
      <section>
        <div className="jumbotron">
          <h1 className="jumbotron-heading"> TV Bland</h1>
          <p className="jumbotron-text">
            TV Show and web series database. <br />
            Create personalised schedules. Episode guide, cast, crew and character information.
          </p>
        </div>

        <div className="movies-list-section">
          <h2 className="header-2">Last Added Shows</h2>
          <div className="movies-list">
            {movies.map((movie) => (
              <div className="single-movie-item">
                <MovieCard alt="" height="240px" rating={parseInt( movie.show.rating.average) } text ={movie.show.name} image={movie.show.image.medium} url ={`/movie/${movie.show.id}`} width="165px" key={movie.id} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
