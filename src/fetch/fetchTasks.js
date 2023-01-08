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

// export const sendPressureValue = async (input) =>
//     await fetch(`http://80.249.147.77/value/pressure/add/${input.pressureId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json',
//             'Transfer-Encoding': 'chunked',
//         },
//         body: JSON.stringify({
//             date: input.date,
//             highPressure: 0,
//             lowPressure: 0,
//             pulse: 0,
//             time: input.time
//         }),
//     })
//         .then((result) => result.json())
//         .catch((err) => console.log(err));

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