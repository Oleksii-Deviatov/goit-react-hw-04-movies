import React from 'react';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const { pathname } = useLocation();
  const { search } = useLocation();
  const { path } = useRouteMatch();

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink
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
