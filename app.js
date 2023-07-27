console.log('viva Node!!!');

const fs = require('fs');

console.log(process.argv[2]);
console.log(process.argv[3]);

let data = readFile("./input/student.csv")

if (data) {
    data += '\npippo,pluto,paperino';

    writeData("./output/joke2.csv", data);
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