import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

// import { useState, useEffect } from 'react';
// import api from '../utils/api';
// import Login from './Login.js';
import Register from '../Register/Register';
// import ProtectedRoute from '../../utils/ProtectedRoute';
// import InfoTooltip from './InfoTooltip';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import { Switch, Route, useHistory } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

// import * as auth from '../utils/auth';

function App() {

  // const [loggedIn, setLoggedIn] = useState(false);
  // const history = useHistory();


  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <Register />

        {/* <Switch>
          <Route exact path="/"
            component={Main}
          loggedIn={loggedIn}
          />

          <Route path="/sign-in">
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path="/sign-up">
            <Register />
          </Route>

        </Switch> */}

        {/* {loggedIn && <Footer />} */}
      </div>
    </div>
  );
}

export default App;
