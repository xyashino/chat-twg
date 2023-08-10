import { useMutation } from "@apollo/client";
import { UseFormSetError } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { REGISTER_USER } from "@/app/services/register-user";
import { NavigationName } from "@/app/enums/navigation-name";
import { SetNavigationParamsTypes } from "@/app/types/root-params";
import { RegisterUserData } from "@/app/types/register-user-data";

export const useRegistration = (
  setError: UseFormSetError<RegisterUserData>,
) => {
  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    errorPolicy: "all",
  });

  const { navigate } =
    useNavigation<SetNavigationParamsTypes<NavigationName>>();

  const creatAccount = async (formData: RegisterUserData) => {
    const { errors: gqlErrors } = await registerUser({
      variables: {
        ...formData,
      },
    });
    console.log(gqlErrors);
    if (gqlErrors) {
      setError("root", { message: gqlErrors[0].message });
      console.log(gqlErrors);
      return;
    }
    navigate(NavigationName.Login);
  };

  return {
    creatAccount,
    loading,
  };
};
