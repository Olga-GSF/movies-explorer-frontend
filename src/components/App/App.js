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
import InfoTooltip from '../InfoToolTip/InfoToolTip';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../utils/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { Switch, Route, useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  // const [userEmail, setUserEmail] = useState();
  // const [userName, setUserName] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [status, setStatus] = useState(false);
  // const history = useHistory();

  const closePopup = () => {
    setInfoTooltipOpen(false);
  };

  useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        closePopup();
      }
    }
    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  function parse(type) {
    return typeof type == 'string' ? JSON.parse(type) : type;
  }

  return (
    <CurrentUserContext.Provider value={{
      loggedIn: loggedIn,
      setLoggedIn: setLoggedIn,
      currentUser: currentUser,
      setCurrentUser: setCurrentUser,
      setStatus: setStatus,

    }}>
      <div className="App">
        <div className="page">

          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute path="/movies" render={() => <Movies />} authorizationStatus={parse(localStorage.getItem('auth-status'))}>
            </ProtectedRoute>

            <ProtectedRoute path="/saved-movies" render={() => <SavedMovies />} authorizationStatus={parse(localStorage.getItem('auth-status'))}>
            </ProtectedRoute>

            <Route path="/sign-in">
              <Login />
            </Route>

            <Route path="/sign-up">
              <Register />
            </Route>

            <ProtectedRoute path="/profile" render={() => <Profile />} authorizationStatus={parse(localStorage.getItem('auth-status'))}>
            </ProtectedRoute>

            <Route>
              <NotFound />
            </Route>

          </Switch>

          {/* {loggedIn && <Footer />} */}
          <InfoTooltip isOpen={isInfoTooltipOpen} status={status} onClose={closePopup} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
