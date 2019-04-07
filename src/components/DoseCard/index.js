import { connect } from 'react-redux';
import DoseCard from './DoseCard';
import { checkBoxDoom } from '../../actions/doseInfo';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  onClickCheckbox: (stuff, id, isChecked) => {
    // console.log(stuff, id, isChecked);
    dispatch(checkBoxDoom(stuff, id, isChecked));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoseCard);
