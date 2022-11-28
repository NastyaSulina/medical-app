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
        {
            id: 4,
            type: 'dropDownList',
            name: 'Аллергии',
            property:
                'Укусы насекомых\n' + 'Пыльца\n' + 'Спреи от насекомых\n' + 'Солнцезащитные кремы',
        },
        {
            id: 5,
            type: 'dropDownList',
            name: 'Хронические заболевания',
        },
    ],
    funcFields: [
        {
            id: 6,
            type: 'switcher',
            name: 'Уведомления',
        },
        {
            id: 7,
            type: 'switcher',
            name: 'Сортировать отмеченное',
        },
        {
            id: 8,
            type: 'link',
            name: 'Рассказать другу',
        },
        {
            id: 9,
            type: 'link',
            name: 'О приложении',
        },
    ],
    exitFields: [
        {
            id: 10,
            type: 'exit',
            name: 'Выйти',
        },
    ],
};

export default ProfileFields;
