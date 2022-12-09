export const getFormattedDate = (today = new Date()) =>
    'Y-m-d'
        .replace('Y', today.getFullYear().toString())
        .replace('m', (today.getMonth() + 1 > 9 ? '' : '0') + (1 + today.getMonth()))
        .replace('d', (today.getDate() + 1 > 9 ? '' : '0') + today.getDate());

export const getLocalDay = (date) => {
    let day = date.getDay();

    if (day === 0) {
        // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }

    return day;
};
