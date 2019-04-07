import React from 'react';
import '../../styles/css/main.css/main.css';
import DailyDoses from '../DailyDoses/';

const ScheduleScreen = () => (
        <section className="screenContainer">
                <h3>
                        Schedule
                </h3>
                <DailyDoses/>
        </section>
);
export default ScheduleScreen;