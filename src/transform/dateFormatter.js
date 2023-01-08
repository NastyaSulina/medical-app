export const getDateDefaultFromJSDate = (today = new Date()) =>
    'Y-m-d'
        .replace('Y', today.getFullYear().toString())
        .replace('m', (+today.getMonth() + 1 > 9 ? '' : '0') + (1 + today.getMonth()))
        .replace('d', (+today.getDate() > 9 ? '' : '0') + today.getDate());

export const getDateDefaultFromDDMMYYYY = (dayString) =>
    'Y-m-d'
        .replace('Y', dayString.slice(6, 10))
        .replace('m', dayString.slice(3, 5))
        .replace('d', dayString.slice(0, 2));

export const getDateDefaultFromYYYYMMDD = (dayString) =>
    'd.m.y'
        .replace('d', dayString.slice(8, 10))
        .replace('m', dayString.slice(5, 7))
        .replace('y', dayString.slice(0, 4));

const monthNamesShort = [
    'янв.',
    'февр.',
    'марта',
    'апр.',
    'мая',
    'июня',
    'июля',
    'авг.',
    'сент.',
    'окт.',
    'нояб.',
    'дек.',
];

export const getDateReadableFromDefault = (dayString) => {
    const monthIndex = new Date(dayString).getMonth();
    const monthName = monthNamesShort[monthIndex];

    return 'd m Y'
        .replace('Y', dayString.slice(0, 4))
        .replace('m', monthName)
        .replace('d', +dayString.slice(8, 10));
};

export const getLocalDay = (date) => {
    const day = date.getDay();

    return day === 0 ? 7 : day;
};
