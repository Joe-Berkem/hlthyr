import React from 'react';
import '../../styles/css/main.css/main.css';
import Header from '../Header/Header.js';
import ScheduleScreen from '../ScheduleScreen/ScheduleScreen';
import NavBar from '../NavBar/NavBar.js';
import MyMedsScreen from '../MyMedsScreen/MyMedsScreen.js';
import StashScreen from '../StashScreen/StashScreen.js';
import Sidebar from '../SideBar/Sidebar.js';



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
        <Route exact path="/my-meds" component={ MyMedsScreen }/>
        <Route exact path="/stock" component={ StashScreen }/>
      </Switch> 

    <Sidebar/>
  </Router>
);

export default App;
