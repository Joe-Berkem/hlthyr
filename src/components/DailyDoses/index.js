import { connect } from "react-redux";
import DailyDoses from "./DailyDoses";

const mapStateToProps = state => {
    let doses = Object.values (state.doses) 
    
    
    return {
        
        doses: doses.map((dose) => {
            dose.medName = state.meds[dose.med_id].name;
            dose.medColour = state.meds[dose.med_id].medColour;
            return dose;
        }) 
    };
};

export default connect(mapStateToProps)(DailyDoses);