import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import TaskForm from './TaskForm';
import { addNewTask } from '../../../redux/slice/todo/todoSlice';

const initialValues = {
  type: '',
  date: '',
};

const AddNewTask = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const id = uuidv4();
    dispatch(addNewTask({ ...values, id, isDone: false, isOnEdit: false }));
  };

  return (
    <div className='w-full h-1/2 p-10 flex flex-col items-center justify-center gap-5 bg-slate-200'>
      <span className='text-4xl font-bold self-start'>Add New Task</span>
      <TaskForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        btnSuccessText={'Add Task'}
        btnCancelText={''}
      />
    </div>
  );
};

export default AddNewTask;
