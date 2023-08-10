import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "@/app/components/common/Input";
import { Button } from "@/app/components/common/buttons/Button";
import { Controller } from "react-hook-form";
import { useRegistration } from "@/app/hooks/useRegistration";

export const SignUpForm = () => {
  const { control, errors, register, handleSubmit } = useRegistration();

  return (
    <>
      <View style={styles.form}>
        <Controller
          control={control}
          {...register("email")}
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
          {...register("firstName")}
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
          {...register("lastName")}
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
          {...register("password")}
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
          {...register("passwordConfirmation")}
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
      <Button style={styles.button} onPress={handleSubmit}>
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
