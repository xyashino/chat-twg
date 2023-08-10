import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { SignUpFormSchema } from "@/app/screens/SingUpScreen/sign-up-form-schema";
import { REGISTER_USER } from "@/app/services/register-user";
import { NavigationName } from "@/app/enums/navigation-name";
import { SetNavigationParamsTypes } from "@/app/types/root-params";
import { RegisterUserData } from "@/app/types/register-user-data";

export const useRegistration = () => {
  const [registerUser] = useMutation(REGISTER_USER, {
    errorPolicy: "all",
  });

  const { navigate } =
    useNavigation<SetNavigationParamsTypes<NavigationName>>();

  const formOptions = { resolver: yupResolver(SignUpFormSchema) };

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm<RegisterUserData>(formOptions);

  const creatAccount = async (formData: RegisterUserData) => {
    const { errors: gqlErrors } = await registerUser({
      variables: {
        ...formData,
      },
    });
    if (gqlErrors) return console.log(gqlErrors);
    navigate(NavigationName.Login);
  };

  return {
    control,
    errors,
    register,
    handleSubmit: handleSubmit(creatAccount),
  };
};
