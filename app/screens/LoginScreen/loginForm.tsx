import { View, StyleSheet } from "react-native";
import { Input } from "@/app/components/common/Input";
import { Button } from "@/app/components/common/buttons/Button";
import React from "react";

export const LoginForm = () => {
  return (
    <>
      <View style={styles.form}>
        <Input label="e-mail address" />
        <Input label="password" secureTextEntry />
      </View>
      <Button style={styles.button}>Log in</Button>
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
    marginTop: 20,
  },
});
