import React from 'react';
import { Formik } from 'formik';

import FormikForm from './FormikForm';
import { validationSchema } from '../../../utils/validate/newTaskValidation';

const TaskForm = ({
  initialValues,
  handleSubmit,
  handleReset,
  btnSuccessText,
  btnCancelText,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    onReset={handleReset}
    validationSchema={validationSchema}
  >
    <FormikForm btnSuccessText={btnSuccessText} btnCancelText={btnCancelText} />
  </Formik>
);

export default TaskForm;
