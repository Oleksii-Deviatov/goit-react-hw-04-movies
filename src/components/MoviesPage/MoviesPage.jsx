import { React, useState, useEffect } from 'react';
import MovieList from '../MovieList';
import { search } from '../../Api';
import { useHistory, useLocation } from 'react-router';

const MoviePage = () => {
  const location = useLocation();
  const history = useHistory();
  const [input, setInput] = useState(location.search.slice(7));
  const [movies, setMovies] = useState([]);

  function inputHendler({ target: { value } }) {
    setInput(value);
  }

  useEffect(() => {
    if (input.length > 0) {
      search(input).then(data => setMovies(data));
      history.push({ search: `query=${input}` });
    } else {
      setMovies([]);
    }
  }, [input]);

  return (
    <>
      <input placeholder="Search" value={input} onChange={inputHendler} />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviePage;
