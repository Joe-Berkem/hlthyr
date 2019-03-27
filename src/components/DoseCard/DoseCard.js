import React from 'react';


const DoseCard = ({time, medName, medColour, dose, unit }) => (

    <div style={styles.container}>
        <div style={ styles.column }>
            <p style={styles.text}>{time}11:00am</p>
        </div>

        <div style={ {...styles.column, backgroundColour: medColour} }>
            <p style={styles.text}>{medName}Paracetamol</p>
            <p style={styles.text}>{dose} 200mg x 2{unit}</p>
        </div>

        <div style={styles.column}>
            <p style={styles.text}>Taken</p>
            <input type="checkbox"></input>
        </div>
    </div>

)

export default DoseCard;

const styles = {
    container: {
        width: '80%',
        backgroundColor: '#d9d9d9',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    column: {
        width: '25%',
        display: 'flex',
        height: '50%',
        borderRadius: '8px',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: '1em 0',
    },
    text: {
        margin: '0',
    }

  }