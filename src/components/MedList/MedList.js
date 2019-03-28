import React from 'react';
import MedCardForm from '../MedCardForm/MedCardForm.js';

const MedList = ({ meds }) => (

    <section style={styles.container}>
      
        <MedCardForm/>

    </section>
)

export default MedList;

const styles = {
    container: {
        width: '100%',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
}