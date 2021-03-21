import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

const MovieList = ({ movies }) => {
  const { pathname } = useLocation();
  const { search } = useLocation();

  return (
    <>
      <ul className={styles.list}>
        {movies.map(({ id, title }) => (
          <li className={styles.listItem} key={id}>
            <NavLink
              className={styles.link}
              to={{
                pathname: `/movies/${id}`,
                state: { from: pathname, search: search },
              }}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
