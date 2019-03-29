export const capitalise = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

// export const buildFakeData = (state) => {
//   let fakeState = state;
//   let userMeds = {
//     medName: 'warfarin',
//     unit: '1kg lumps',
//     dose: 2,
//     stock: 99,
//     frequency: 'Three Times',
//     medId: 3,
//   };
//   fakeState.userMeds = userMeds;
//   return fakeState;
// };

export const setDoses = (state) => {
  let { unit, dose, stock, frequency, medId } = state.userMeds;
  console.log('userMeds: ', state.userMeds);
  let stateCopy = state;
  let dosesList = stateCopy.doses;
  let dosesCount = Object.keys(dosesList).length;
  stateCopy.meds[medId].stock = stock;
  let medName = stateCopy.meds[medId].name;

  switch (frequency) {
    case 'Once':
      dosesList[dosesCount + 1] = addDose(
        dosesCount + 1,
        '09:00',
        dose,
        unit,
        medId,
        medName
      );
      break;

    case 'Twice':
      dosesList[dosesCount + 1] = addDose(
        dosesCount + 1,
        '10:00',
        dose,
        unit,
        medId,
        medName
      );
      dosesList[dosesCount + 2] = addDose(
        dosesCount + 2,
        '18:00',
        dose,
        unit,
        medId,
        medName
      );
      break;

    case 'Three Times':
      dosesList[dosesCount + 1] = addDose(
        dosesCount + 1,
        '08:00',
        dose,
        unit,
        medId,
        medName
      );
      dosesList[dosesCount + 2] = addDose(
        dosesCount + 2,
        '14:00',
        dose,
        unit,
        medId,
        medName
      );
      dosesList[dosesCount + 3] = addDose(
        dosesCount + 3,
        '20:00',
        dose,
        unit,
        medId,
        medName
      );
      break;

    default:
      break;
  }

  stateCopy.doses = dosesList;
  return stateCopy;
};

const addDose = (id, time, dose, unit, med_id, medName) => ({
  id,
  time,
  dose,
  unit,
  med_id,
  medName,
});
