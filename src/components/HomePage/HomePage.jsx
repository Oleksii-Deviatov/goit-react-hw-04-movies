import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { trending } from '../../Api';

function HomePage() {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    trending().then(data => setTrend(data));
  }, []);
  console.log('jdkha');
  return (
    <>
      <ul>
        {trend.map(({ id, original_title, name, original_name }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>
              {original_title || name || original_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
