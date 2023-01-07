// Главная: запрос на получение задач по дате

export const getTasksByDate = async (id, date) =>
    await fetch(`http://80.249.147.77/all/getSorted/${id}&${date}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Архив: запрос на получение Текущих задач

export const getCurrentTasksByDate = async (id, date) =>
    await fetch(`http://80.249.147.77/medicine/getByDate/${id}&${date}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));

// Архив: запрос на получение Предыдущих задач

export const getPreviousTasksByDate = async (id, date) =>
    await fetch(`http://80.249.147.77/medicine/getArchive/${id}&${date}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));
