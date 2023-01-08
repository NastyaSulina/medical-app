import React from 'react';
import { View } from 'react-native';
import styles from './TaskList-styles';
import Task from '../Task/Task';

function TaskList({ tasks, status, date }) {

    const otherStatusTasks = tasks.filter((task) => task.status === !status);
    const thisStatusTasks = tasks.filter((task) => task.status === status);

    return (
        <>
            {status && thisStatusTasks.length > 0 && otherStatusTasks.length > 0 && <View style={styles.separator} />}
            {thisStatusTasks.length > 0 && thisStatusTasks
                .map((task) => (
                    <Task
                        key={task.id}
                        type={task.type}
                        id={task.id}
                        date={date}
                        units={task.units}
                        numberPerUse={task.numberPerUse}
                        taskName={task.name}
                        isChecked={task.status}
                        time={task.time}
                        outerStyles={styles.task}
                        isDefault={task.default}
                    />
                ))}
        </>
    );
}

export default TaskList;
