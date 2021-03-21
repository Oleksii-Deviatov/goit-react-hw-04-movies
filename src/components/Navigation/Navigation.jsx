import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import styles from './styles.module.css';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <Container>
        <NavLink
          className={styles.link}
          activeClassName={styles.linkActive}
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.linkActive}
          to="/movies"
        >
          Movies
        </NavLink>
      </Container>
    </div>
  );
}

export default Navigation;
