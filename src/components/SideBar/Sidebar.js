import React from 'react';
import { connect } from 'react-redux';
import '../../styles/css/main.css/main.css';
import Calendar from 'react-calendar';
import MedInfo from '../MedInfo';

// Defines whether we show the medicine information panel
// or the calendar
const showMedInfo = true;

const mapStateToProps = (state) => {
  console.log('state.app.medInfoItem', state.app.medInfoItem);
  return {
    medInfoItem: state.app.medInfoItem,
  };
};

const Sidebar = ({ medInfoItem }) => (
  <aside className='sidebarContainer'>
    {showMedInfo ? (
      // If so, show the MedInfo component, passing through
      // the id of the respective medecine as props.
      <MedInfo med_id={medInfoItem} />
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

export default connect(mapStateToProps)(Sidebar);
