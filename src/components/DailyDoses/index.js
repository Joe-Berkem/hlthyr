import { connect } from "react-redux";
import DailyDoses from "./DailyDoses";

const mapStateToProps = state => {
    let doses = [];
    
    for (let value of Object.values(state.doses)) {
        doses.push(value);
    }
    
    
    return {
        
        doses: doses.map((dose) => {
            dose.medName = state.meds[dose.med_id].name;
            dose.medColour = state.meds[dose.med_id].medColour;
            return dose;
        }) 
    };
};

export default connect(mapStateToProps)(DailyDoses);