import React from 'react';
import '../../styles/css/main.css/main.css';
import MedList from '../MedList/MedList.js'


const MyMedsScreen = () => (
        <section className="screenContainer">
                <h3>
                    My Meds
                </h3>
                <MedList/>
        </section>
);
export default MyMedsScreen;