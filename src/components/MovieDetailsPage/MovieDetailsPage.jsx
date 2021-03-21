import { React, useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { fullInfo } from '../../Api';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import styles from './styles.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const [movie, setMovie] = useState('');

  useEffect(() => {
    fullInfo(movieId).then(data => setMovie(data));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <button>go back(не работает)</button>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="{movie.title}"
          />
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <ul>
            {movie.genres &&
              movie.genres.map(el => <li key={el.id}>{el.name}</li>)}
          </ul>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
