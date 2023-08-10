import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "@/app/components/common/Input";
import { Button } from "@/app/components/common/buttons/Button";
import { useForm, Controller } from "react-hook-form";
import { EMAIL_REGEX } from "@/app/constants/regex";
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  REQUIRED_EMAIL,
  REQUIRED_PASSWORD,
} from "@/app/constants/validation-messages";
import { LoginFormData } from "@/app/types/login-form-data";
import { useLogin } from "@/app/hooks/useLogin";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();
  const { onLogin, loading } = useLogin(setError);

  return (
    <>
      <View style={styles.form}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: { message: REQUIRED_EMAIL, value: true },
            pattern: { value: EMAIL_REGEX, message: INVALID_EMAIL },
          }}
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
          name="password"
          rules={{
            required: { message: REQUIRED_PASSWORD, value: true },
            minLength: { value: 8, message: INVALID_PASSWORD },
          }}
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
        onPress={handleSubmit(onLogin)}
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
