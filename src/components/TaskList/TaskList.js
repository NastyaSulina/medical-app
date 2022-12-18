import React from 'react';
import { View } from 'react-native';
import styles from './TaskList-styles';
import Task from '../Task/Task';

function TaskList({ tasks, status, date }) {
    return (
        <>
            {status && <View style={styles.separator} />}
            {Boolean(tasks) &&
                tasks
                    .filter((task) => task.status === status)
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
                        />
                    ))}
        </>
    );
}

export default TaskList;
