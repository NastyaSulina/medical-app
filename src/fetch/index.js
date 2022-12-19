export const sendUserSignInInput = async (input) => {
    const response = await fetch('http://80.249.147.77/user/signIn', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            email: input.email,
            password: input.password,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

    return response;
};

export const sendUserSignUpInput = async (input) => {
    const response = await fetch('http://80.249.147.77/user/add', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            email: input.email,
            name: input.username,
            password: input.password,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));
    return response;
};

export const sendNewUserName = async (input) => {
    const response = await fetch('http://80.249.147.77/user/update', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            id: input.id,
            email: input.email,
            name: input.name,
            password: input.password,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));
    return response;
};

export const getTasksByDate = async (id, date) => {
    const response = await fetch(`http://80.249.147.77/all/getSorted/${id}&${date}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));
    return response;
};

export const sendNewMedicine = async (input) => {
    const response = await fetch(`http://80.249.147.77/medicine/add/${input.id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            name: input.title,
            units: input.units,
            per_use: input.amount,
            start_day: input.start_day,
            time: input.time,
            duration: input.number_of_days,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

    return response;
};

export const sendNewCustomSymptom = async (input) => {
    const response = await fetch(`http://80.249.147.77/parameter/add/${input.id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
            'Access-Control-Allow-Origin': '*',
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

    return response;
};

export const sendNewPressure = async (input) => {
    const response = await fetch(`http://80.249.147.77/parameter/add/pressure/${input.id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            start_day: input.start_day,
            time: input.time,
            duration: input.number_of_days,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

    return response;
};
