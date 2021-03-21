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
          {review.map(el => (
            <li key={el.id}>
              <h2>Author: ${el.author}</h2>
              <p>${el.content}</p>
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

//We don't have any reviews for this movie
