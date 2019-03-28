import { connect } from 'react-redux';
import MedInfo from './MedInfo';

// Get the appropriate data from the store and pass down
// into the MedInfo component

const mapStateToProps = ({ meds }, { med_id }) => ({
  med: meds[med_id],
});

export default connect(mapStateToProps)(MedInfo);
