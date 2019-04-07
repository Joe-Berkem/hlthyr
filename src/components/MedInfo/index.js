import React from 'react';
import { connect } from 'react-redux';
import { capitalise } from '../../utils';

// Get the appropriate data from the store and pass down into the MedInfo component
const mapStateToProps = ({ meds }, { med_id }) => ({
  med: meds[med_id],
});

// Deconstruct medecine data as it comes in and then show appropriate elements on the screen.
// WE NEED JOE'S CAPITALISATION ROUTINE (FOR THE INFOHEADER LINE). PERHAPS MOVE IT INTO A UTILS MODULE AND IMPORT?
const MedInfo = ({ med }) => (
  <section>
    <h3>Medicine Info</h3>

    <div className="infoHeader">
      <p className="infoHeaderText">{capitalise(med.name)}:</p>
    </div>

    <div className="infoContainer">
      <p className="infoContainerText">{med.desc}</p>
    </div>

    <div className="infoHeader">
      <p className="infoHeaderText">Dangers:</p>
    </div>

    <div className="infoContainer">
      <p className="infoContainerText">{med.warnings}</p>
    </div>

  </section>
);

export default connect(mapStateToProps)(MedInfo);




