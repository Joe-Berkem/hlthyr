const submitMed = (state, {medName, unit, dose, stock}) => ({
    ...state, 
    userMeds: [
        ...state.userMeds, 
        {
            medName: medName,
            unit: unit,
            dose: dose,
            stock: stock,
        }
    ]
})


const reducers = (state, action) => {
    console.log(action);
        switch (action.type) {
            case "submit": return submitMed(state, action);
            default: return state;
        }
};

export default reducers;