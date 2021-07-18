import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState()
  return (
      <userContext.provider value={[loggedInUser, setLoggedInUser]}>
        <Router >
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
            </Route>
          <Route path="/destination/:type">
            <Destination />
            </Route>
          <Route path="/contact">
            <Contact />
            </Route>
          <Route path="/blog">
            <Blog />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
            <Home />
            </Route>
            <Route path='*'>
            <NoMatch />
            </Route>
        </Switch>
      </Router>
      </userContext.provider>
  );
}

export default App;
