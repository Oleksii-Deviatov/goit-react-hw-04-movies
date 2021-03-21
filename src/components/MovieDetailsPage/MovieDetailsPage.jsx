import { React, useState, useEffect } from 'react';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router';
import { fullInfo } from '../../Api';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import Container from '../Container';
import ReactImageFallback from 'react-image-fallback';
import fb from '../../imgs/fb450.jpg';
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
        <Container className={styles.container}>
          <button className={styles.btn} onClick={goBackHeandler}>
            Go back
          </button>
          <div className={styles.wrapper}>
            <ReactImageFallback
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              fallbackImage={fb}
              initialImage="loader.gif"
              alt={movie.title}
            />
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>{movie.title}</h2>
              <p className={styles.score}>
                User Score: {movie.vote_average * 10 + '%'}
              </p>
              <p className={styles.overviewTitle}>Overview</p>
              <p className={styles.overview}>{movie.overview}</p>
              <p className={styles.genresTitle}>Genres</p>
              <ul className={styles.listGenres}>
                {movie.genres &&
                  movie.genres.map(({ id, name }) => (
                    <li className={styles.itemGenres} key={id}>
                      {name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <ul className={styles.listLinks}>
            <li className={styles.itemLinks}>
              <NavLink className={styles.link} to={`${url}/cast`}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to={`${url}/reviews`}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </Container>
      )}
    </>
  );
}

export default MovieDetailsPage;
