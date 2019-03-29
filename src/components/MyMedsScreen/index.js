import { connect } from "react-redux";
import MyMedsScreen from "./MyMedsScreen";


const mapStateToProps = state => {

    let meds = Object.values (state.meds) 

    return {
        userMeds: state.userMeds,
        meds
    }
}

export default connect(mapStateToProps)(MyMedsScreen);