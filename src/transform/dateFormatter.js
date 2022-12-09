export const getFormattedDate = (today = new Date()) =>
    'Y-m-d'
        .replace('Y', today.getFullYear().toString())
        .replace('m', (+today.getMonth() + 1 > 9 ? '' : '0') + (1 + today.getMonth()))
        .replace('d', (+today.getDate() > 9 ? '' : '0') + today.getDate());

export const getLocalDay = (date) => {
    let day = date.getDay();

    if (day === 0) {
        day = 7;
    }

    return day;
};
