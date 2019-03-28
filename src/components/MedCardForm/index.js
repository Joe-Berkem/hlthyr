import { connect } from "react-redux";
import MedCardForm from "./MedCardForm/MedCardForm";
import { submit } from "../../data/actions/state.js";

const mapDispatchToProps = dispatch => {
    return {
        submitMed: (state) => dispatch(submit(state)),
    };
};

export default connect(null, mapDispatchToProps)(MedCardForm);