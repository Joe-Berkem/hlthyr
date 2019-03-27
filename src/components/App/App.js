import React from 'react';
import '../../styles/css/main.css/main.css';
import Header from '../Header/Header.js';
import ScheduleScreen from '../ScheduleScreen/ScheduleScreen';
import NavBar from '../NavBar/NavBar.js';
import Sidebar from './Sidebar/Sidebar';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => (
 
  <Router>
    <Header/>
    <NavBar/>

    
    <div className="screenContainer">
      <Switch>
        <Route exact path="/" component={ ScheduleScreen }/>
      </Switch>
    </div>

    <Sidebar />


    
  </Router>
);

export default App;
