import React from 'react';
import '../App.css';
import Header from '../Header.js';
import ScheduleScreen from '../ScheduleScreen/ScheduleScreen';
import NavBar from '../NavBar/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => (
 
  <Router>
    <Header/>
    <NavBar/>

    <Switch>
      <Route exact path="/" component={ ScheduleScreen }/>
    </Switch>
    
  </Router>
);

export default App;
