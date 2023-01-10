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
            date,
            highPressure,
            lowPressure,
            pulse,
            time
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
            date,
            score,
            time
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
            date,
            fracPart,
            intPart,
            time
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

//   Главная: установить значение для кастомных симптомов

export const sendCustomValue = async (paramId, date, value, time) =>
    await fetch(`http://80.249.147.77/value/custom/add/${paramId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            date,
            time,
            value
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

//   Главная: сбросить значение параметров

export const sendParamIsUnchecked = async (paramId, date) =>
    await fetch(`http://80.249.147.77/parameter/uncheck/${paramId}&${date}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({})})
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

// Запрос на получение значения давления

export const getPressureValue = async (parameterId, date, time) =>
    await fetch(`http://80.249.147.77/value/pressure/getByDate/${parameterId}&${date}&${time}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Запрос на получение значения температуры

export const getTemperatureValue = async (parameterId, date, time) =>
    await fetch(`http://80.249.147.77/value/temperature/getByDate/${parameterId}&${date}&${time}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Запрос на получение значения настроение

export const getMoodValue = async (parameterId, date, time) =>
    await fetch(`http://80.249.147.77/value/mood/getByDate/${parameterId}&${date}&${time}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Запрос на получение значения кастомного симптома

export const getCustomValue = async (parameterId, date, time) =>
    await fetch(`http://80.249.147.77/value/custom/getByDate/${parameterId}&${date}&${time}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));

