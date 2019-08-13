import * as yup from "yup";
export const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required()
        .min(2, "First name is too short"),
    lastName: yup
        .string()
        .trim()
        .required()
        .min(2, "Last name is too short"),
    email: yup
        .string()
        .email()
        .trim()
        .required(),
    password: yup
        .string()
        .min(8)
        .max(32)
        .required()
});
