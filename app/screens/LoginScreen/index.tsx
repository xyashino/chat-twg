import React from "react";
import { View, StyleSheet } from "react-native";
import { AuthScreenContainer } from "@/app/components/AuthScreenContainer";
import { NavigationName } from "@/app/enums/navigation-name";
import { LoginForm } from "@/app/screens/LoginScreen/loginForm";
import { AuthenticationFooter } from "@/app/components/AuthenticationFooter";
import { LoginHeader } from "@/app/screens/LoginScreen/loginHeader";

export const LoginScreen = () => {
  return (
    <AuthScreenContainer>
      <LoginHeader />
      <View style={styles.mainContainer}>
        <LoginForm />
        <AuthenticationFooter
          navigationText="Sign up"
          navigationLink={NavigationName.SignUp}
          question="Don't have an account?"
        />
      </View>
    </AuthScreenContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
});
