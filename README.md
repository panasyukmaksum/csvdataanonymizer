# csvdataanonymizer

This is a simple CSV data anonymization utility module for Node.js.

## Installation

To install the package, use npm:

```
npm install csvdataanonymizer
```

## Usage

```javascript
const csvdataanonymizer = require('csvdataanonymizer');

// Example CSV data
const csvData = `ID,Name,Email,Phone
123,John Doe,john@example.com,555-1234
456,Alice Smith,alice@example.com,555-5678
789,Bob Johnson,bob@example.com,555-9012`;

// Anonymization rules
const anonymizationRules = {
    'Name': name => name.split(' ')[0] + ' ***',
    'Email': email => '***@example.com',
    'Phone': phone => '***-****'
};

// Anonymize CSV data
const anonymizedCSV = csvdataanonymizer.anonymizeCSV(csvData, anonymizationRules);
console.log(anonymizedCSV);
```

## API

### `anonymizeCSV(csvData, anonymizationRules)`

Anonymizes the given CSV data according to the specified anonymization rules.

- `csvData`: The CSV data to anonymize.
- `anonymizationRules`: An object containing anonymization rules for each CSV field. Each rule should be a function that takes a field value as input and returns the anonymized value.

Returns the anonymized CSV data.

## License

This package is licensed under the MIT License.
