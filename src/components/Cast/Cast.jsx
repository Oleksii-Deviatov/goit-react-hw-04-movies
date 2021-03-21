import { React, useState, useEffect } from 'react';
import { credirs } from '../../Api';
import { useParams } from 'react-router';
import Container from '../Container';
import styles from './styles.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState('');

  useEffect(() => {
    credirs(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  return (
    <>
      {casts && (
        <Container>
          <ul className={styles.list}>
            {casts.map(({ profile_path, name, character }) => (
              <li className={styles.item}>
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.character}>Character: {character}</p>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
};

export default Cast;
