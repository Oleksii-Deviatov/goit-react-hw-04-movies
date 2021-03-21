import { React, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

const HomePage = lazy(() =>
  import('./components/HomePage' /* webpackChunkName: "HomePage" */),
);

const MoviesPage = lazy(() =>
  import('./components/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
