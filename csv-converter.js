function transformFromJsonToCsv(data, divider) {
    const dataArray = JSON.parse(data);
    const keys = Object.keys(dataArray[0]);
    console.log(keys);

    let csv = keys.join(divider) + '\n';
    console.log(csv);
    
    for (let i = 0; i < dataArray.length; i++) {
        const element = dataArray[i];
        const valueArray = Object.values(element);
        console.log(valueArray);

        csv += valueArray.join(divider);

        if (i !== dataArray.length - 1) {
            csv += '\n';
        }
    }
    return csv;
}

module.exports = transformFromJsonToCsv;