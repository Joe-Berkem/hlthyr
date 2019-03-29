import React from 'react';
import '../../styles/css/main.css/main.css';
import homeSVG from '../../styles/assets/homeButton.svg';
import { Link } from "react-router-dom";



const HomeButton = () => (

	<Link to='/'><img src={ homeSVG } className="homeButton" /></Link>

);

export default HomeButton;