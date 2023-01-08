const measureValues = [['мл', 'мг', 'табл.', 'шт.']];

const timeArray = [];
const hourArray = [];
const minuteArray = [];
let time = '';

for (let i = 0; i < 60; i++) {
    if (i < 10) {
        time = '0';
    }
    time += i.toString();
    if (i < 24) {
        hourArray.push(time);
    }
    minuteArray.push(time);
    time = '';
}

timeArray.push(hourArray, minuteArray);

export {measureValues, timeArray};
