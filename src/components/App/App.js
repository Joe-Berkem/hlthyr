import React from 'react';
import '../../styles/css/main.css/main.css';
import Header from '../Header/Header.js';
import ScheduleScreen from '../ScheduleScreen/ScheduleScreen';
import NavBar from '../NavBar/NavBar.js';
import DoseCard from '../DoseCard/DoseCard.js';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => (
 
  <Router>
    <Header/>
    <NavBar/>
    <DoseCard />



    <Switch>
      <Route exact path="/" component={ ScheduleScreen }/>
    </Switch>
    
  </Router>
);

export default App;
