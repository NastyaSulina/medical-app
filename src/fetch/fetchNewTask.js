// Добавляем новое лекарство

export const sendNewMedicine = async (input) =>
    await fetch(`http://80.249.147.77/medicine/add/${input.id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            name: input.title,
            units: input.unit,
            per_use: input.amount,
            start_day: input.start_day,
            time: input.time,
            duration: input.number_of_days,
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
            name: input.title,
            is_default: false,
            start_day: input.start_day,
            time: input.time,
            duration: input.number_of_days,
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
            start_day: input.start_day,
            time: input.time,
            duration: input.number_of_days,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));
