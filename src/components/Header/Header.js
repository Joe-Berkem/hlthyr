import React from 'react';
import '../../styles/css/main.css/main.css';
import LogOutButton from '../Buttons/LogOutButton.js';
import HomeButton from '../Buttons/HomeButton.js';
import SettingButton from '../Buttons/SettingsButton.js';



const Header = () => (

	<React.Fragment>


		<HomeButton />


		<div className="headerContainer">
	        <h1 className="headerLogo">
	        HLTHYR
	        </h1>
	    </div>


	    <SettingButton />


	    <LogOutButton />

	</React.Fragment>
 
);

export default Header;