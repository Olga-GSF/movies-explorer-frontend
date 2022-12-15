import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFoundPage/NotFound';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';

import Footer from '../Footer/Footer';

import { useState, useEffect } from 'react';
// import api from '../utils/api';

// import ProtectedRoute from '../../utils/ProtectedRoute';
// import InfoTooltip from './InfoTooltip';
// import * as auth from '../../utils/Auth/auth';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { Switch, Route, useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';



function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  // const history = useHistory();


  return (
    <CurrentUserContext.Provider value={{
      loggedIn: loggedIn,
      setLoggedIn: setLoggedIn,
    }}>
      <div className="App">
        <div className="page">

          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/movies">
              <Movies />
            </Route>

            <Route path="/saved-movies">
              <SavedMovies />
            </Route>

            <Route path="/sign-in">
              <Login />
            </Route>

            <Route path="/sign-up">
              <Register />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/notfound">
              <NotFound />
            </Route>

          </Switch>

          <Footer />

          {/* {loggedIn && <Footer />} */}

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
