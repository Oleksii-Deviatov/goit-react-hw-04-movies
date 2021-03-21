import { React, useState, useEffect } from 'react';
import { trending } from '../../Api';
import MovieList from '../MovieList';

function HomePage() {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    trending().then(data => setTrend(data));
  }, []);

  return (
    <>
      <MovieList movies={trend} />
    </>
  );
}

export default HomePage;
