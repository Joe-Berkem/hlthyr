export const submitMed = ( medName, stock, unit, dose) => {
    return {
        type: "submit",
        medName: medName,
        stock: stock,
        unit: unit,
        dose: dose,
    };
};