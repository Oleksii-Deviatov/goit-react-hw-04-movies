import { React, useState, useEffect } from 'react';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router';
import { fullInfo, search } from '../../Api';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import styles from './styles.module.css';

function MovieDetailsPage() {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fullInfo(movieId).then(data => setMovie(data));
  }, [movieId]);

  function goBackHeandler() {
    history.push({
      pathname: location.state ? location.state.from : '/',
      search: location.state && location.state.search,
    });
  }

  return (
    <>
      {movie && (
        <>
          <button onClick={goBackHeandler}>Go back</button>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="{movie.title}"
          />
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average * 10 + '%'}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <ul>
            {movie.genres &&
              movie.genres.map(({ id, name }) => <li key={id}>{name}</li>)}
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
