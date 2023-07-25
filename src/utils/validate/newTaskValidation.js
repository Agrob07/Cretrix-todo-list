import * as Yup from 'yup';

export const validationSchema = Yup.object({
  type: Yup.string().required('Please Enter valid task name'),
  date: Yup.date().required('Please Enter valid date'),
});
