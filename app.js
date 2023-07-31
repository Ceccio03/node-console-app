console.log('viva Node!!!');

const fs = require("fs");

const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

let data = readFile(inputUrl)

if (data) {
    const result = transformData(data);

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
    const headerArray = header.split(',');
    console.log(headerArray);

    // 3) creare un array chiamato students (vuoto)
    const elements = [];
    console.log(elements);

    // 4) ciclare sull'array rows
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        console.log(row);
    
        // 4a) creare una costante rowArray splittando la singola row sulle virgole
        const rowArray = row.split(',');
        console.log(rowArray);

        // 4b) creare un oggetto vuoto chiamato student
        const element = [];
        console.log(element);

        // 4c) ciclare sull'headerArray
        for (let j = 0; j < headerArray.length; j++) {
            const key = headerArray[j];
            console.log(key);
        
            // 4c1) per ogni elemento dell'headerArray aggiungere una proprietà all'oggetto student
                // student[headerArray[j]] = rowArray[j]
            element[key] = rowArray[j];
            console.log(element);
        }
        // 4d) aggiungere student a students
        elements.push(element);
        console.log(elements);
    }
    // 5) ritornare JSON.stringify di students
    return JSON.stringify(elements, null, 4);

    // A1) tipizzare i valori nel json
    // A2) aggiungere un parametro all'applicazione che mi permette di indicare il carattere diviso
    // A3) gestire la possibilità che nel csv ci siano degli spazi non voluti

    // return JSON.stringify(rows, null, 4);
}