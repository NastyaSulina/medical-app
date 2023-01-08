import { getDateReadableFromDefault } from './dateFormatter';

export const formatTasksByDate = (data) => {
    const arr = [];

    function Task(id, time, type, name, units, numberPerUse, isDefault, isChecked) {
        this.id = id;
        this.name = name;
        this.type = type;

        this.time = time.slice(11, 16);

        if (type === 'medicine') {
            this.units = units;
            this.numberPerUse = numberPerUse;
        }

        if (type === 'symptom') {
            this.default = isDefault;
        }

        this.status = isChecked;
    }

    for (const task of data) {
        arr.push(
            new Task(
                task.id,
                task.schedule.time,
                task.type,
                task.name,
                task.units,
                task.numberPerUse,
                task.default,
                task.checked
            )
        );
    }

    return arr;
};

export const formatArchiveTasksByDate = (data) => {
    const arr = [];

    function Task(id, time, firstDay, lastDay, name) {
        this.id = id;
        this.title = name;
        this.time = time.slice(11, 16);
        this.interval = `${getDateReadableFromDefault(firstDay)} — ${getDateReadableFromDefault(
            lastDay
        )}`;
    }

    for (const task of data) {
        arr.push(
            new Task(
                task.id,
                task.schedule.time,
                task.schedule.firstDay,
                task.schedule.lastDay,
                task.name
            )
        );
    }

    return arr;
};
