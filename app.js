console.log('viva Node!!!');

const fs = require("fs");
// const transformCsvToJson = require('./json-converter');
// const transformJsonToCsv = require('./csv-converter');
// const jsonConverter = require('./json-converter');
// console.log(jsonConverter);

const inputUrl = process.argv[2];
const splittedInputUrl = inputUrl.split('.');
const ext = splittedInputUrl[splittedInputUrl.length - 1];

let transformFunction;

if (ext.toLocaleLowerCase().includes('json')) {
    transformFunction = require('./csv-converter');
} else if (ext.toLocaleLowerCase().includes('csv')) {
    transformFunction = require('./json-converter');
} else {
    console.log('non posso convertire i file: ' + ext);
    process.exit();
}

const outputUrl = process.argv[3];
let divider = process.argv[4];  // A2) aggiungere un parametro all'applicazione che mi permette di indicare il carattere divisorio

if (divider === undefined) {
    divider = ',';
}
console.log(divider);

let data = readFile(inputUrl)

if (data) {
    const result = transformFunction(data, divider);

    writeData(outputUrl, result);
}

function readFile(url) {
    try {
        const data = fs.readFileSync(url, "utf8");
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

function writeData(url,data) {
    try {
        fs.writeFileSync(url, data);
    } catch (err) {
        console.error(err.message);
    }
}

function transformData(data) {
    const rows = data.split(/\r?\n/);

    // 1) creare una costante 'header' con la prima riga che AVRETE TOLTO a rows
    const header = rows.shift();
    console.log(header);

    // 2) creare una costante 'headerArray' splittando la stringa header sulle virgole
    const headerArray = header.split(divider);
    console.log(headerArray);

    // 3) creare un array chiamato students (vuoto)
    const elements = [];
    console.log(elements);

    // 4) ciclare sull'array rows
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        console.log(row);
    
        // 4a) creare una costante rowArray splittando la singola row sulle virgole
        const rowArray = row.split(divider);
        console.log(rowArray);

        // 4b) creare un oggetto vuoto chiamato student
        const element = {};
        console.log(element);

        // 4c) ciclare sull'headerArray
        for (let j = 0; j < headerArray.length; j++) {
            const key = headerArray[j];
            console.log(key);
            const value = rowArray[j];
            const trimmedValue = value.trim();  // A3) gestire la possibilità che nel csv ci siano degli spazi non voluti
            const convertedValue = tryParse(trimmedValue);
            // 4c1) per ogni elemento dell'headerArray aggiungere una proprietà all'oggetto student
                // student[headerArray[j]] = rowArray[j]
            element[key] = convertedValue;
            console.log(element);
        }
        // 4d) aggiungere student a students
        elements.push(element);
        console.log(elements);
    }
    // 5) ritornare JSON.stringify di students
    return JSON.stringify(elements, null, 4);

    // return JSON.stringify(rows, null, 4);
}

// A1) tipizzare i valori nel json
function tryParse(str) {
    // if (str === 'true' || str == 'false') {
    //     return str === 'true';
    // }
    if (str === 'true') {
        return true;
    }
    if (str === 'false') {
        return false;
    }

    const number = parseFloat(str);
    console.log(number);

    if (isNaN(number)) {
        return str;
    } else {
        return number;
    }
}