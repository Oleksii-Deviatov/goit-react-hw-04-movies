import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { trending } from '../../Api';
import MovieList from '../MovieList';

function HomePage() {
  // let location = useLocation();

  // location.state = {
  //   from: location.pathname,
  // };

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
