import { View, StyleSheet } from "react-native";
import { Input } from "@/app/components/common/Input";
import { Button } from "@/app/components/common/buttons/Button";
import React from "react";

export const SignUpForm = () => (
  <>
    <View style={styles.form}>
      <Input label="e-mail address" />
      <Input label="first name" />
      <Input label="last name" />
      <Input label="password" secureTextEntry />
      <Input label="confirm password" secureTextEntry />
    </View>
    <Button style={styles.button}>Sign up</Button>
  </>
);

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
    marginTop: 20,
  },
});
