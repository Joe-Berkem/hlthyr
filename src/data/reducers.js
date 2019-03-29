const reducers = (state, action) => {
  switch (action.type) {
    case 'checkBoxDoom':
      return updateDoses(state, action);

    default:
      return state;
  }
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

export default reducers;
