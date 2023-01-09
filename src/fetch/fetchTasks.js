// Главная: запрос на получение задач по дате

export const getTasksByDate = async (id, date) =>
    await fetch(`http://80.249.147.77/all/getSorted/${id}&${date}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));

//   Главная: сменить статус лекарства

export const sendMedicineStatusChange = async (medicineId, date) =>
    await fetch(`http://80.249.147.77/medicine/check/${medicineId}&${date}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({})})
        .catch((err) => console.log(err));

//   Главная: установить значение для давления

export const sendPressureValue = async (pressureId, date, highPressure, lowPressure, pulse, time) =>
    await fetch(`http://80.249.147.77/value/pressure/add/${pressureId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            date: date,
            highPressure: highPressure,
            lowPressure: lowPressure,
            pulse: pulse,
            time: time
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

//   Главная: установить значение для настроения

export const sendMoodValue = async (moodId, date, score, time) =>
    await fetch(`http://80.249.147.77/value/mood/add/${moodId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            date: date,
            score: score,
            time: time
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

//   Главная: установить значение для температуры

export const sendTemperatureValue = async (temperatureId, date, intPart, fracPart, time) =>
    await fetch(`http://80.249.147.77/value/temperature/add/${temperatureId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            date: date,
            fracPart: fracPart,
            intPart: intPart,
            time: time
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Архив: запрос на получение Текущих задач

export const getCurrentTasksByDate = async (id, date) =>
    await fetch(`http://80.249.147.77/medicine/getCurrent/${id}&${date}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Архив: запрос на получение Предыдущих задач

export const getPreviousTasksByDate = async (id, date) =>
    await fetch(`http://80.249.147.77/medicine/getArchive/${id}&${date}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));