import React from 'react';
import '../../styles/css/main.css/main.css';
import MedList from '../MedList/MedList.js';

const MyMedsScreen = ({ userMeds, meds }) => {
  return (
    <section className='screenContainer'>
      <div style={styles.container}>
        <h3>My Meds</h3>
        <div style={styles.addMedBanner}>
          <h3 style={styles.dateBannerText}>Add a medication</h3>
        </div>

        <MedList />

        <div style={styles.currentMedsBanner}>
          <h3 style={styles.dateBannerText}>Your current medications</h3>
        </div>

        {meds.map((med, i) => (
            med.stock > 0 ? 
            <div style={{...styles.medItem, backgroundColor: med.medColour}}>
                <h3 style={styles.MedText}>{med.name}</h3>
                <p>{med.stock} in stock</p>
            </div>
            : null
        ))}
      </div>
    </section>
  );
};

export default MyMedsScreen;

const styles = {
  container: {
    width: '100%',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  addMedBanner: {
    width: '85%',
    backgroundColor: '#5271ff',
    minHeight: '3em',
    borderRadius: '8px',
    textAlign: 'left',
    padding: 'auto, 0',
  },
  currentMedsBanner: {
    width: '85%',
    backgroundColor: '#38b6ff',
    minHeight: '3em',
    borderRadius: '8px',
    textAlign: 'left',
    padding: 'auto, 0',
  },
  dateBannerText: {
    paddingLeft: '1em',
    color: 'white',
  },
  medItem: {
    width: '40%',
    minHeight: '2em',
    borderRadius: '8px',
    textAlign: 'center',
    padding: 'auto, 0',
    margin: '1em',
  },
  medText: {
    color: 'black',
  }
};
