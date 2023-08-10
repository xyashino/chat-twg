import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "@/app/components/common/Input";
import { Button } from "@/app/components/common/buttons/Button";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "@/app/hooks/useLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "@/app/screens/LoginScreen/login-form-schema";
import { LoginFormData } from "@/app/types/login-form-data";

export const LoginForm = () => {
  const formOptions = { resolver: yupResolver(LoginFormSchema) };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>(formOptions);
  const { loading, loginMethod } = useLogin(setError);

  return (
    <>
      <View style={styles.form}>
        <Controller
          control={control}
          {...register("email")}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="e-mail address"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          {...register("password")}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.password?.message}
            />
          )}
        />
      </View>
      <Button
        style={styles.button}
        type={loading ? "disabled" : "default"}
        onPress={handleSubmit(loginMethod)}
      >
        Log in
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: 16,
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 20,
    flexGrow: 1,
  },
  button: {
    marginTop: "auto",
  },
});
