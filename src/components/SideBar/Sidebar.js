import React from 'react';
import '../../styles/css/main.css/main.css';
import Calendar from 'react-calendar';
import MedInfo from '../MedInfo';

// Defines whether we show the medicine information panel
// or the calendar
const showMedInfo = true;

const Sidebar = () => (
  <aside className='sidebarContainer'>
    {showMedInfo ? (
      // If so, show the MedInfo component, passing through
      // the id of the respective medecine as props.
      <MedInfo med_id={1} />
    ) : (
      // Otherwise show the calendar component
      <Calendar
        tileContent={({ date, view }) =>
          view === 'month' && date.getDay() === 3 ? (
            <div className='calendarCircle' />
          ) : null
        }
      />
    )}
  </aside>
);
export default Sidebar;
