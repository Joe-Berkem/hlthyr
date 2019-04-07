import { connect } from 'react-redux';
import MedCardForm from './MedCardForm';
import { submitMed, amendMedInfo } from '../../data/actions/state.js';

const mapStateToProps = (state) => {
  return {
    meds: state.meds,
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitMed: (data) => dispatch(submitMed(data)),
    amendMedInfo: (data) => dispatch(amendMedInfo(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MedCardForm);
