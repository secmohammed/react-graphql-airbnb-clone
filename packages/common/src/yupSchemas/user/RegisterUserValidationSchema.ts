import * as yup from "yup";
const emailNotLongEnough = "email must be at least 3 characters";
const passwordNotLongEnough = "password must be at least 3 characters";
const invalidEmail = "email must be a valid email";

export const registerUserValidationSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, emailNotLongEnough)
        .max(255)
        .email(invalidEmail)
        .required(),
    password: yup
        .string()
        .min(3, passwordNotLongEnough)
        .max(255)
        .required(),
    firstName: yup
        .string()
        .trim()
        .required()
        .min(2, "First name is too short"),
    lastName: yup
        .string()
        .trim()
        .required()
        .min(2, "Last name is too short")
});
