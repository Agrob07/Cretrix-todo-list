import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    !!tasks.length && (
      <ul className='flex flex-col gap-2'>
        {tasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
    )
  );
};

export default TaskList;
