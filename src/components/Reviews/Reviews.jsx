import { React, useState, useEffect } from 'react';
import { reviews } from '../../Api';
import { useParams } from 'react-router';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setCasts] = useState();

  useEffect(() => {
    reviews(movieId).then(data => data.length === 0 || setCasts(data));
  }, [movieId]);

  return (
    <>
      {review ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>${content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
