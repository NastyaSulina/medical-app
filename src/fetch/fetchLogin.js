// Вход

export const sendUserSignInInput = async (input) =>
    await fetch('http://80.249.147.77/user/signIn', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            email: input.email,
            password: input.password,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Регистрация

export const sendUserSignUpInput = async (input) =>
    await fetch('http://80.249.147.77/user/add', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            email: input.email,
            name: input.username,
            password: input.password,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));
