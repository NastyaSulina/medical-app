// Добавляем новое лекарство

export const sendNewMedicine = async (input) =>
    await fetch(`http://80.249.147.77/medicine/add/${input.userId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            duration: input.duration,
            name: input.name,
            perUse: input.perUse,
            startDay: input.startDay,
            time: input.time,
            units: input.units,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Добавляем новый пользовательский симптом

export const sendNewCustomSymptom = async (input) =>
    await fetch(`http://80.249.147.77/parameter/add/${input.userId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            default: false,
            duration: input.duration,
            name: input.name,
            startDay: input.startDay,
            time: input.time,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Добавляем новый дефолтный симптом (давление)

export const sendNewPressure = async (input) =>
    await fetch(`http://80.249.147.77/parameter/add/pressure/${input.userId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            default: true,
            duration: input.duration,
            name: "Давление",
            startDay: input.startDay,
            time: input.time,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));


// Добавляем новый дефолтный симптом (температура)

export const sendNewTemperature = async (input) =>
    await fetch(`http://80.249.147.77/parameter/add/temperature/${input.userId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            default: true,
            duration: input.duration,
            name: "Температура",
            startDay: input.startDay,
            time: input.time,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));


// Добавляем новый дефолтный симптом (настроение)

export const sendNewMood = async (input) =>
    await fetch(`http://80.249.147.77/parameter/add/mood/${input.userId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            default: true,
            duration: input.duration,
            name: "Настроение",
            startDay: input.startDay,
            time: input.time,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));
