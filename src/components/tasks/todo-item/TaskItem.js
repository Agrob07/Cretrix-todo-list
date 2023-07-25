import React from 'react';

import ItemOnEdit from './ItemOnEdit';
import ItemIdle from './ItemIdle';

const TaskItem = ({ task }) => {
  return task.isOnEdit ? <ItemOnEdit task={task} /> : <ItemIdle task={task} />;
};

export default TaskItem;
