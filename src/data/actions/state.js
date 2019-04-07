export const amendMedInfo = (key) => {
  return {
    type: 'amend',
    key: key,
  };
};


export const submitMed = ( {medName, stock, unit, dose, medId, frequency}) => {

    return {
        type: "submit",
        medName: medName,
        medId: medId,
        stock: stock,
        unit: unit,
        dose: dose,
        frequency: frequency,
    };
};

export const setUserMeds = ( data ) => {
	return {
		type: "setUserMeds",	
		data,
	};
};

export const setUserDoses = ( data ) => {
	return {
		type: "setUserDoses",	
		data,
	};
};


