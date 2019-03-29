import { connect } from "react-redux";
import MedCardForm from "./MedCardForm";
import { submitMed } from "../../data/actions/state.js";

const mapDispatchToProps = dispatch => {
    return {
        submitMed: (data) => dispatch(submitMed(data)),
    };
};

export default connect(null, mapDispatchToProps)(MedCardForm);