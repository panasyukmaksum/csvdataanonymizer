// csvdataanonymizer.js

module.exports = {
    anonymizeCSV
};

const { parseCSV, generateCSV } = require('parseandgen-csv');

function anonymizeCSV(csvData, anonymizationRules) {
    const parsedData = parseCSV(csvData);
    
    parsedData.forEach(row => {
        for (const field in anonymizationRules) {
            if (row.hasOwnProperty(field)) {
                const anonymizationFunction = anonymizationRules[field];
                row[field] = anonymizationFunction(row[field]);
            }
        }
    });

    return generateCSV(parsedData);
}
