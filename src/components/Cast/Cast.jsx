import { React, useState, useEffect } from 'react';
import { credirs } from '../../Api';
import { useParams } from 'react-router';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState('');

  useEffect(() => {
    credirs(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  // console.log(casts);
  return (
    <>
      {casts && (
        <ul>
          {casts.map(el => (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w300/${el.profile_path}`}
                alt={el.name}
              />
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
