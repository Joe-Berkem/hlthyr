import React from 'react';
import { connect } from 'react-redux';

// Get the appropriate data from the store and pass down into the MedInfo component
const mapStateToProps = ({ meds }, { med_id }) => ({
  med: meds[med_id],
});

// Deconstruct medecine data as it comes in and then show appropriate elements on the screen.
// WE NEED JOE'S CAPITALISATION ROUTINE (FOR THE INFOHEADER LINE). PERHAPS MOVE IT INTO A UTILS MODULE AND IMPORT?
const MedInfo = ({ med }) => (
  <section>
    <h3 style={styles.infoBannerText}>Medicine Info</h3>
    <p style={styles.infoHeader}>{med.name}:</p>
    <p style={styles.infoText}>{med.desc}</p>
    <p style={styles.infoHeader}>Dangers:</p>
    <p style={styles.infoText}>{med.warnings}</p>
  </section>
);

export default connect(mapStateToProps)(MedInfo);

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
