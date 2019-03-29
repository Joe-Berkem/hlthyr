import React from 'react';
import '../../styles/css/main.css/main.css';
import { Link } from "react-router-dom";


const logOutButton = () => (

	    <button className="logOutButton"><Link to='/logoutscreen'>Log out</Link></button>

);

export default logOutButton;