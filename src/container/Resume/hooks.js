import { useFormik } from 'formik';
import * as yup from 'yup';

export default ForResume = () => {
	/**
	 * @description formik for user validation
	 */
	const personalInformationSchema = yup.object().shape({
		name: yup.string().required("Name is Required"),
		profession: yup.string().required("Profession is Required"),
		city: yup.string().required("City is Required"),
		country: yup.string().required("Country is Required"),
		pinCode: yup.string().required("PinCode is Required"),
		phone: yup.string().required("Phone is Required"),
		email: yup
			.string()
			.email('Please enter valid email')
			.required("Email Address is Required"),
		personalInfo: yup.string().required("PersonalInfo is Required"),
	});
	return { personalInformationSchema };
};
