import React from 'react';
import '../../styles/css/main.css/main.css';
import Calendar from 'react-calendar';


const Sidebar = () => (
	<aside className="sidebarContainer">
		<Calendar
			tileContent={({ date, view }) =>
				view === 'month' && date.getDay() === 3 ? (
					<div className='calendarCircle' />
				) : null
			}
		/>    
  </aside>
 
);
export default Sidebar;