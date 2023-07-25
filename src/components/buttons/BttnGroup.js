import React from 'react';
import { useDispatch } from 'react-redux';

import TaskBtn from './TaskBtn';
import { deleteTask, setTaskOnEdit } from '../../redux/slice/todo/todoSlice';

const BttnGroup = ({ task }) => {
  const dispatch = useDispatch();

  const btns = [
    {
      text: 'edit',
      className:
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
      onClick: () => {
        dispatch(setTaskOnEdit({ id: task.id, value: true }));
      },
    },
    {
      text: 'delete',
      className:
        'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
      onClick: () => {
        dispatch(deleteTask(task.id));
      },
    },
  ];

  return (
    <div>
      {btns.map((btn) => (
        <TaskBtn {...btn} key={btn.text} />
      ))}
    </div>
  );
};

export default BttnGroup;
