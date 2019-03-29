import React from 'react';
import '../../styles/css/main.css/main.css';
import { Link } from "react-router-dom";


const NavBar = () => (

	<div className="nav">

		<label for="toggle">&#9776;</label>
		<input type="checkbox" id="toggle"/>

	    <ul className="navbarContainer">

				<li className="navbarItem">
					<Link to='/'>Schedule</Link>
				</li>
				<li className="navbarItem">
					<Link to='/my-meds'>My Meds</Link>
				</li>
				<li className="navbarItem">
					<Link to='/settings'>Settings</Link>
				</li>
	    </ul>

	</div>
 
);
export default NavBar;