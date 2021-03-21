import { React, useState, useEffect } from 'react';
import { credirs } from '../../Api';
import { useParams } from 'react-router';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState('');

  useEffect(() => {
    credirs(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  return (
    <>
      {casts && (
        <ul>
          {casts.map(({ profile_path, name, character }) => (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
