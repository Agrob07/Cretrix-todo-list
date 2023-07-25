import React from 'react';
import { useDispatch } from 'react-redux';
import { setTaskIsDone } from '../../../redux/slice/todo/todoSlice';
import BttnGroup from '../../buttons/BttnGroup';

const ItemIdle = ({ task }) => {
  const dispatch = useDispatch();

  const handleCheckbox = (e) => {
    dispatch(setTaskIsDone({ id: task.id, value: e.target.checked }));
  };

  return (
    <div className='w-1/3 flex justify-evenly bg-slate-100'>
      <div className='flex gap-2 items-center'>
        <input
          type='checkbox'
          defaultChecked={task.isDone}
          onChange={handleCheckbox}
        />
        <span>{task.type}</span>
      </div>
      <BttnGroup task={task} />
    </div>
  );
};

export default ItemIdle;
