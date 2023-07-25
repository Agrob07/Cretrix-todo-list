import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectTaskList,
  setSelectedDate,
} from '../../../redux/slice/todo/todoSlice';

const TaskDateList = () => {
  const tasks = useSelector(selectTaskList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDateClick = (date) => {
    dispatch(setSelectedDate(date));
    navigate('/tasks');
  };

  const dates = useMemo(() => {
    const datesObj = tasks.reduce((accumulator, value) => {
      return {
        ...accumulator,
        [value.date]: (accumulator[value.date] || 0) + 1,
      };
    }, {});

    return Object.entries(datesObj);
  }, [tasks]);

  return (
    !!dates.length && (
      <div className='w-full h-1/2 p-10 flex flex-col gap-5 bg-slate-200'>
        <span className='text-4xl font-bold self-start'>Dates</span>
        <ul className='flex flex-col gap-2'>
          {dates.map((date, idx) => (
            <li
              key={idx}
              className='bg-white w-48 p-2 flex justify-center rounded-md cursor-pointer transform duration-200 hover:scale-110'
              onClick={() => handleDateClick(date[0])}
            >
              <span>{date[0]} </span>
              <span>({date[1]})</span>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default TaskDateList;
