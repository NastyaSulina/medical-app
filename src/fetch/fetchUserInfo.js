// Смена имени пользователя

export const sendNewUserName = async (input) =>
    await fetch('http://80.249.147.77/user/update', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Transfer-Encoding': 'chunked',
        },
        body: JSON.stringify({
            id: input.id,
            name: input.name,
        }),
    })
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Смена пароля пользователя

export const sendNewUserPassword = async () => {};
