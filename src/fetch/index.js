export const sendUserSignInInput = async (input) => {
    const response = await fetch('', {
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
    }).then((result) => result);
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
    }).then((result) => {
        if (result.status === 200) {
            console.log('Успешно зарегистрировались');
        } else if (result.status === 400) {
            console.log('Что-то пошло не так');
        } else if (result.status === 500) {
            console.log('Пользователь с такой почтой уже есть');
        }
    });
};
