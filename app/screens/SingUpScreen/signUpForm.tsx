import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "@/app/components/common/Input";
import { Button } from "@/app/components/common/buttons/Button";
import { Controller, useForm } from "react-hook-form";
import { useRegistration } from "@/app/hooks/useRegistration";
import { Caption } from "@/app/components/typography/Caption";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormSchema } from "@/app/screens/SingUpScreen/sign-up-form-schema";
import { RegisterUserData } from "@/app/types/register-user-data";

export const SignUpForm = () => {
  const formOptions = { resolver: yupResolver(SignUpFormSchema) };

  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm<RegisterUserData>(formOptions);
  const { loading, creatAccount } = useRegistration(setError);

  return (
    <>
      <View style={styles.form}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="e-mail address"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="first name"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="last name"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.lastName?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.password?.message}
              secureTextEntry
            />
          )}
        />
        <Controller
          control={control}
          name="passwordConfirmation"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="confirm password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.passwordConfirmation?.message}
              secureTextEntry
            />
          )}
        />
      </View>
      {errors.root?.message && (
        <Caption color="error"> {errors.root?.message} </Caption>
      )}
      <Button
        style={styles.button}
        onPress={handleSubmit(creatAccount)}
        type={loading ? "disabled" : "default"}
      >
        Sign up
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
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
  },
});
