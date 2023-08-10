import * as Yup from "yup";

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter an email address"),
  password: Yup.string()
    .min(8, "Passwords must be at least 8 characters")
    .required("Please enter a password"),
});
