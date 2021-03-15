import * as Yup from 'yup';
import { email, password } from '../../helpers/InputValidation';
/**
 * Formik validation for Login
 * @author Gladys INABEZA
 * @since March 20201
 *
 */

export const initialValues = {
  email: '',
  password: ''
};

export const validationSchema = Yup.object().shape({
  email,
  password
});
