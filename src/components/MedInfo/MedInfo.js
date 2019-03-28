import React from 'react';

const MedInfo = ({ med }) => (
  // Deconstruct medecine data as it comes in and then show
  // appropriate elements on the screen.
  <section>
    <h3 style={styles.infoBannerText}>Medicine Info</h3>
    <p style={styles.infoHeader}>{med.name}:</p>
    <p style={styles.infoText}>{med.desc}</p>
    <p style={styles.infoHeader}>Dangers:</p>
    <p style={styles.infoText}>{med.warnings}</p>
  </section>
);

export default MedInfo;

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
  infoBannerText: {
    paddingLeft: '1em',
    color: 'red',
  },
  infoHeader: {
    alignText: 'left',
    color: 'red',
    marginTop: '1em',
    fontWeight: 'bold',
  },
  infoText: {
    alignText: 'left',
    color: 'red',
    marginTop: '0.5em',
  },
};
