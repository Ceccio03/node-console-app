function transformFromJsonToCsv(data, divider) {
    const dataArray = JSON.parse(data);
    const keys = Object.keys(dataArray[0]);
    console.log(keys);
}

module.exports = transformFromJsonToCsv;