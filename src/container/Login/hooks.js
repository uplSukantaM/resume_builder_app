import { useFormik } from "formik";
import * as yup from "yup";

export default ForLogin = () => {
  /**
   * @description formik for user validation
   */
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .strict()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .matches(/^\S*$/, "Password field cannot contain blankspaces")
      // .trim("No White Spaces")
      .required('Password is required'),
  });
  return { loginValidationSchema };
};
