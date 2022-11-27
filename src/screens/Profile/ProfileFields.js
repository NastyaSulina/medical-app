const ProfileFields = {
    infoFields: [
        {
            id: 1,
            type: 'input',
            name: 'Почта',
            property: 'sonelex123@gmail.com',
        },
        {
            id: 2,
            type: 'input',
            name: 'Рост',
            property: '165',
        },
        {
            id: 3,
            type: 'input',
            name: 'Вес',
            property: '50',
        },
    ],
    funcFields: [
        {
            id: 4,
            type: 'switcher',
            name: 'Уведомления',
        },
        {
            id: 5,
            type: 'switcher',
            name: 'Сортировать отмеченное',
        },
        {
            id: 6,
            type: 'dropDownList',
            name: 'Рассказать другу',
        },
        {
            id: 7,
            type: 'dropDownList',
            name: 'О приложении',
        },
    ],
    exitFields: [
        {
            id: 8,
            type: 'exit',
            name: 'Выйти',
        },
    ],
};

export default ProfileFields;
