import React from 'react';
import DoseCard from '../DoseCard/';

const DailyDoses = ({ doses }) => (

    <section style={styles.container}>
        <div style={styles.dateBanner}>
            <h3 style={styles.dateBannerText}>Today</h3>
        </div>
        {doses.map(dose => 
        <DoseCard
            time={dose.time}
            medName={dose.medName} 
            medColour={dose.medColour} 
            dose={dose.dose}
            unit={dose.unit}
        /> ) 
        }

    </section>
)

export default DailyDoses;

const styles = {
    container: {
        marginTop: '1em',
        width: '100%',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    dateBanner: {
        width: '85%',
        backgroundColor: '#5271ff',
        minHeight: '3em',
        borderRadius: '8px',
        textAlign: 'left',
        padding: 'auto, 0',
    }, 
    dateBannerText: {
        paddingLeft: '1em', 
        color: 'white',
    }
}