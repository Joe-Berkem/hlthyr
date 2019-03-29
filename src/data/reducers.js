// import { buildFakeData, setDoses } from '../utils';

const submitMed = (state, {medName, unit, dose, stock, frequency, medId}) => ({
    ...state, 
    userMeds: [
        ...state.userMeds, 
        {
            medName: medName,
            medId: medId,
            unit: unit,
            dose: dose,
            stock: stock,
            frequency: frequency,
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

const reducers = (state, action) => {
  switch (action.type) {
    case 'checkBoxDoom':
      // let fakeState = buildFakeData(state);
      // setDoses(fakeState);
      return updateDoses(state, action);
    case 'submit':
      return submitMed(state, action);
    default:
      return state;
  }
};

export default reducers;
