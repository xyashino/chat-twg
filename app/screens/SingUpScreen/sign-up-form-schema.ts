import * as Yup from "yup";

export const SignUpFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter an email address"),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  password: Yup.string()
    .min(8, "Passwords must be at least 8 characters")
    .required("Please enter a password"),
  passwordConfirmation: Yup.string()
    .min(8, "Passwords must be at least 8 characters")
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Please confirm your password"),
});
