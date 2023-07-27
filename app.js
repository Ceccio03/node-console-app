console.log('viva Node!!!');

const fs = require('fs');

const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

let data = readFile(inputUrl)

if (data) {
    data += '\npippo,pluto,paperino';

    writeData(outputUrl, data);
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