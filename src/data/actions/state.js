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