import { useFormik } from 'formik';
import * as yup from 'yup';

export default ForSignUp = () => {
  /**
   * @description formik for user validation
   */
  const signupValidationSchema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .email('Please enter valid email')
      .required("Email Address is Required"),
    password: yup
      .string()
      .strict()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .matches(/^\S*$/, 'Password field cannot contain blankspaces')
      // .trim("No White Spaces")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .strict()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .matches(/^\S*$/, 'Confirm-Password field cannot contain blankspaces')
      // .trim("No White Spaces")
      .when('password', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref("password")], "Both password need to be the same"),
      })
      .required("Password is required"),
  });
  return { signupValidationSchema };
};
