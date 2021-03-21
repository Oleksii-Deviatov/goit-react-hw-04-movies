import { React, useState, useEffect } from 'react';
import MovieList from '../MovieList';
import { search } from '../../Api';

const MoviePage = () => {
  const [input, setInput] = useState('');

  function inputHendler({ target: { value } }) {
    setInput(value);
  }

  const [find, setFind] = useState([]);

  useEffect(() => {
    if (input.length > 0) {
      search(input).then(data => setFind(data));
    } else {
      setFind([]);
    }
  }, [input]);

  return (
    <>
      <form>
        <input placeholder="Search" value={input} onChange={inputHendler} />
      </form>
      <MovieList movies={find} />
    </>
  );
};

export default MoviePage;
