import * as Yup from 'yup';
import { email } from '../../helpers/InputValidation';
/**
 * Formik validation for Forgot Password Component
 * @author Gladys INABEZA
 * @since March 20201
 *
 */

export const initialValues = { email: '' };

export const validationSchema = Yup.object().shape({ email });
