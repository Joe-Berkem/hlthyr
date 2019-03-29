import React from 'react';
import '../../styles/css/main.css/main.css';
import LogOutButton from '../Buttons/LogOutButton.js';
import HomeButton from '../Buttons/HomeButton.js';
import SettingButton from '../Buttons/SettingsButton.js';



const Header = () => (

	<React.Fragment>


		


		<div className="headerContainer">

			<HomeButton />

	        <h1 className="headerLogo">
	        HLTHYR
	        </h1>

	        {/*
	        <SettingButton />
	    	*/}
	
		    <LogOutButton />

		</div>

	</React.Fragment>
 
);

export default Header;