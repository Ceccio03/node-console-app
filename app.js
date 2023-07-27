console.log('viva Node!!!');

const fs = require('fs');

const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

let data = readFile(inputUrl)

if (data) {
    const result = transformData(data);

    writeData(outputUrl, result);
}

function readFile(url) {
    try {
        const data = fs.readFileSync(url, 'utf8');
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
    // 2) creare una costante 'headerArray' splittando la stringa header sulle virgole
    // 3) creare un array chiamato students (vuoto)
    // 4) ciclare sull'array rows
        // 4a) creare una costante rowArray splittando la singola row sulle virgole
        // 4b) creare un oggetto vuoto chiamato student

    return JSON.stringify(rows);
}