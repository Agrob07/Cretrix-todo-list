import React from 'react';
import TaskForm from '../add/TaskForm';
import { useDispatch } from 'react-redux';
import {
  saveEditedTask,
  setTaskOnEdit,
} from '../../../redux/slice/todo/todoSlice';

const ItemOnEdit = ({ task }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(saveEditedTask({ ...task, ...values, isOnEdit: false }));
  };

  const handleReset = (values) => {
    dispatch(setTaskOnEdit({ id: task.id, value: false }));
  };
  return (
    <TaskForm
      initialValues={task}
      handleSubmit={handleSubmit}
      handleReset={handleReset}
      btnSuccessText={'save'}
      btnCancelText={'cancel'}
    />
  );
};

export default ItemOnEdit;
