import { connect } from "react-redux";
import Settings from './Settings'


const mapStateToProps = state => {
    return {
        name: state.user.name
    };
};

export default connect(mapStateToProps)(Settings);