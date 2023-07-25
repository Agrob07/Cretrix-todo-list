import React from 'react';
import { Field, Form, useFormikContext } from 'formik';

import TaskBtn from '../../buttons/TaskBtn';

const FormikForm = ({ btnSuccessText, btnCancelText }) => {
  const { submitForm, resetForm } = useFormikContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const handleReset = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      onAbort={handleReset}
      className='w-full flex gap-5'
    >
      <Field className='bg-green-100' name='type' />
      <Field type='date' className='bg-green-100' name='date' />
      <TaskBtn
        type='submit'
        text={btnSuccessText}
        className={
          'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        }
      />
      {btnCancelText && (
        <TaskBtn
          type='reset'
          text={btnCancelText}
          className={
            'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
          }
        />
      )}
    </Form>
  );
};

export default FormikForm;
