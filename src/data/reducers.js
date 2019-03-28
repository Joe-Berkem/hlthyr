const submitMed = (state) => ({...state, userMeds: [...state.userMeds, state]})


const reducers = (state, action) => {
        switch (action.type) {
            case "submit": return submitMed(state);
            default: return state;
        }
};

export default reducers;