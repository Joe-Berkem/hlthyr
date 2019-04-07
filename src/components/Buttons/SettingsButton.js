import React from 'react';
import '../../styles/css/main.css/main.css';
import settingGearsSVG from '../../styles/assets/settings-gears.svg';
import { Link } from "react-router-dom";


const SettingButton = () => (

	<img component={Link} to="/settings" src={ settingGearsSVG } className="settingGearsButton"/>

);

export default SettingButton;