export const TASK_TEXT = {
    symptom: {
        true: 'Отмечено',
        false: 'Отметить',
    },
    medicine: {
        true: 'Принято',
        false: 'Принять',
    },
};

const getTemperature = () => {
    const temperature = [];

    for (let i = 32.0; i < 42.1; i += 0.1) {
        temperature.push(i.toFixed(1));
    }
    return [temperature];
};

const getPressure = () => {
    const pressure = [];

    const upper = [];
    const lower = [];
    const heartbeat = [];

    for (let i = 60; i < 300; i++) {
        upper.push(i);
    }

    for (let i = 10; i < 150; i++) {
        lower.push(i);
    }

    for (let i = 40; i < 220; i++) {
        heartbeat.push(i);
    }

    pressure.push(upper, lower, heartbeat);

    return pressure;
};

export const WHEEL_OPTIONS = {
    pressure: getPressure(),
    temperature: getTemperature(),
};
