import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const { pathname } = useLocation();

  // location.state = {
  //   from: location.pathname,
  // };

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink
              to={{
                pathname: `/movies/${id}`,
                state: { from: pathname },
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
