import React from 'react';
import AddNewTask from '../../components/tasks/add/AddNewTask';
import TaskDateList from '../../components/tasks/dates/TaskDateList';

const Home = () => {
  return (
    <div className='w-full h-full p-20 flex flex-col items-center gap-3 bg-slate-100'>
      <AddNewTask />
      <TaskDateList />
    </div>
  );
};

export default Home;
