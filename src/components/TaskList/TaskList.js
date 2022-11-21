import React from 'react';
import styles from './TaskList-styles';
import Task from '../Task/Task';

function TaskList({ tasks, type }) {
    return (
        <>
            {tasks
                .filter((task) => task.type === type)
                .map((task) => (
                    <Task
                        key={task.id}
                        type={type}
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
