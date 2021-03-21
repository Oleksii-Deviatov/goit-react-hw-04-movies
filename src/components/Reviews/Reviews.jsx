import { React, useState, useEffect } from 'react';
import { reviews } from '../../Api';
import { useParams } from 'react-router';
import styles from './styles.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setCasts] = useState();

  useEffect(() => {
    reviews(movieId).then(data => data.length === 0 || setCasts(data));
  }, [movieId]);

  return (
    <>
      {review ? (
        <ul className={styles.list}>
          {review.map(({ id, author, content }) => (
            <li className={styles.item} key={id}>
              <h2 className={styles.title}>Author: {author}</h2>
              <p className={styles.content}>{content}</p>
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
