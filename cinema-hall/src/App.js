import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
          
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        
      </div>
    </UserContext.Provider>
  );
}

export default App;
