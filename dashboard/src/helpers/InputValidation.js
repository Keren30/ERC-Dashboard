import * as Yup from 'yup';

export const email = Yup.string().required('No email provided.').email('That email is not valid');
export const password = Yup.string().required('No password provided.');
