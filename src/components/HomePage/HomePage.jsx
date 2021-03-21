import { React, useState, useEffect } from 'react';
import { trending } from '../../Api';
import MovieList from '../MovieList';
import Container from '../Container';

function HomePage() {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    trending().then(data => setTrend(data));
  }, []);

  return (
    <Container>
      <MovieList movies={trend} />
    </Container>
  );
}

export default HomePage;
