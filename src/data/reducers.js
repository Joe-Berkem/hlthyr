
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

const updateDoses = (state, action) => {
  const stateCopy = state;
  const med_id = stateCopy.doses[action.id].med_id;
  const doseSize = +stateCopy.doses[action.id].dose;

  if (action.stuff === 'taken' && action.isChecked) {
    stateCopy.doses[action.id][action.stuff] = action.isChecked;
    stateCopy.meds[med_id].stock -= doseSize;
    if (stateCopy.meds[med_id].stock < 0) stateCopy.meds[med_id].stock = 0;
  } else if (action.stuff === 'taken' && !action.isChecked) {
    stateCopy.doses[action.id][action.stuff] = action.isChecked;
    stateCopy.meds[med_id].stock += doseSize;
  }

  return { ...stateCopy };

};

const setUserMeds = (state, action) => ({
  ...state,
    meds: action.data,
})

const setUserDoses = (state, action) => ({
  ...state,
    doses: action.data,
})

const reducers = (state, action) => {
  switch (action.type) {
    case 'checkBoxDoom':
      return updateDoses(state, action);
    case "submit": return submitMed(state, action);

    case "setUserMeds": return setUserMeds(state, action);
    case "setUserDoses": return setUserDoses(state, action);

    default:
      return state;
  }
};

export default reducers;
