export const submitMed = ({ medName, stock, unit, dose }) => {
    return {
        type: "submit",
        medName: medName,
        stock: stock,
        unit: unit,
        dose: dose,
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

