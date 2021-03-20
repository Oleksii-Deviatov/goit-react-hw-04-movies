import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fullInfo } from '../../Api';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    fullInfo(movieId).then(data => setMovie(data));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="{movie.title}"
          />
          <h2>{movie.title}</h2>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <ul>
            {movie.genres &&
              movie.genres.map(el => <li key={el.id}>{el.name}</li>)}
          </ul>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
