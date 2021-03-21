import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { trending } from '../../Api';

function HomePage() {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    trending().then(data => setTrend(data));
  }, []);

  return (
    <>
      <ul>
        {trend.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
