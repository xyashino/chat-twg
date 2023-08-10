import { useAuthStore } from "@/app/store/useAuthStore";
import { useMutation } from "@apollo/client";
import { LoginUserResponse } from "@/app/types/login-user-response";
import { LOGIN_USER } from "@/app/services/login-user";
import { LoginFormData } from "@/app/types/login-form-data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "@/app/screens/LoginScreen/login-form-schema";

export const useLogin = () => {
  const formOptions = { resolver: yupResolver(LoginFormSchema) };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>(formOptions);
  const { setToken, setUser } = useAuthStore();
  const [loginUser, { loading }] = useMutation<LoginUserResponse>(LOGIN_USER, {
    errorPolicy: "all",
  });
  const onLogin = async (formData: LoginFormData) => {
    try {
      const { data, errors: serverErrors } = await loginUser({
        variables: { ...formData },
      });
      if (serverErrors) {
        setError("email", { message: serverErrors[0].message });
        setError("password", { message: serverErrors[0].message });
        return;
      }
      if (data?.loginUser) {
        setToken(data.loginUser.token);
        setUser(data.loginUser.user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { onLogin, loading, control, register, errors, handleSubmit };
};
