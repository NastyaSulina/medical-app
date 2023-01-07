// Добавляем новое лекарство

export const sendNewMedicine = async (input) =>
    await fetch(`http://80.249.147.77/medicine/add/${input.id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            duration: input.number_of_days,
            name: input.title,
            perUse: input.amount,
            startDay: input.start_day,
            time: input.time,
            units: input.unit,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Добавляем новый пользовательский симптом

export const sendNewCustomSymptom = async (input) =>
    await fetch(`http://80.249.147.77/parameter/add/${input.id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            default: false,
            duration: input.number_of_days,
            name: input.title,
            startDay: input.start_day,
            time: input.time,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Добавляем новый дефолтный симптом (давление)

export const sendNewPressure = async (input) =>
    await fetch(`http://80.249.147.77/parameter/add/pressure/${input.id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            duration: input.number_of_days,
            startDay: input.start_day,
            time: input.time,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));
