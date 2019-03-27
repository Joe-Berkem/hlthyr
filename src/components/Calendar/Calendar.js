import Calendar from 'react-calendar';

<Calendar
  tileContent={({ date, view }) =>
    view === 'month' && date.getDay() === 3 ? (
      <div className='calendarCircle' />
    ) : null
  }
/>;
