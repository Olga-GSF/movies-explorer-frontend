import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ render, path, exact, authorizationStatus }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if ((authorizationStatus) === true) {
          return (render(routeProps));
        }
        console.log(typeof authorizationStatus);
        return (<Redirect to='/sign-in' />);
      }}
    />
  );
};

export default ProtectedRoute;