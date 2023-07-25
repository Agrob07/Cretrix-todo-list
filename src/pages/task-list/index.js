import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskList from '../../components/tasks/todo-item/TaskList';
import { selectTaskListByDate } from '../../redux/slice/todo/todoSlice';

const TaskListPage = () => {
  const tasks = useSelector(selectTaskListByDate);

  return (
    <div className='w-full h-full p-20 flex flex-col gap-5 bg-slate-200'>
      <Link
        to='/'
        className='w-fit p-3 bg-gray-400 text-lg rounded cursor-pointer'
      >
        Go Back Home
      </Link>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskListPage;
