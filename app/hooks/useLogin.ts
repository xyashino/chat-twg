import { useAuthStore } from "@/app/store/useAuthStore";
import { useMutation } from "@apollo/client";
import { LoginUserResponse } from "@/app/types/login-user-response";
import { LOGIN_USER } from "@/app/services/login-user";
import { LoginFormData } from "@/app/types/login-form-data";
import { UseFormSetError } from "react-hook-form";

export const useLogin = (setError: UseFormSetError<LoginFormData>) => {
  const { setToken, setUser } = useAuthStore();
  const [loginUser, { loading }] = useMutation<LoginUserResponse>(LOGIN_USER, {
    errorPolicy: "all",
  });
  const onLogin = async (formData: LoginFormData) => {
    try {
      const { data, errors } = await loginUser({ variables: { ...formData } });
      if (errors) {
        setError("email", { message: errors[0].message });
        setError("password", { message: errors[0].message });
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
  return { onLogin, loading };
};
