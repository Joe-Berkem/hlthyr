import { setDoses } from '../utils';

const submitMed = (
  state,
  { medName, unit, dose, stock, frequency, medId }
) => ({
  ...state,
  userMeds: {
    medName: medName,
    medId: medId,
    unit: unit,
    dose: dose,
    stock: stock,
    frequency: frequency,
  },
});

const amendInfo = (state, id) => {
  console.log('Getting info for med index: ', id);
  let stateCopy = state;
  stateCopy.app.medInfoItem = id.key;
  return { ...stateCopy };
};

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
      return updateDoses(state, action);
    case 'submit':
      return setDoses(submitMed(state, action));
    case 'amend':
      return amendInfo(state, action);
    default:
      return state;
  }
};

export default reducers;
