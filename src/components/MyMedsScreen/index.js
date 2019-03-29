import { connect } from "react-redux";
import MyMedsScreen from "./MyMedsScreen";


const mapStateToProps = state => {
    return {
        userMeds: state.userMeds
    }
}

export default connect(mapStateToProps)(MyMedsScreen);