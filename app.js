console.log('viva Node!!!');

const fs = require('fs');

let data = readFile("./input/student.csv")

if (data) {
    data += '\npippo,pluto,paperino';

    writeData();
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