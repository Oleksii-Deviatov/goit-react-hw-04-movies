import { React, useState, useEffect } from 'react';
import MovieList from '../MovieList';
import { search } from '../../Api';

const MoviePage = () => {
  const [find, setFind] = useState([]);

  useEffect(() => {
    search('star').then(data => setFind(data));
  }, []);

  return (
    <>
      <MovieList movies={find} />
    </>
  );
};

export default MoviePage;
