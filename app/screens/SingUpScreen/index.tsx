import React from "react";
import { View, StyleSheet } from "react-native";
import { AuthScreenContainer } from "@/app/components/AuthScreenContainer";
import { Heading } from "@/app/components/typography/Heading";
import { NavigationName } from "@/app/enums/navigation-name";
import { AuthenticationFooter } from "@/app/components/AuthenticationFooter";
import { SignUpForm } from "@/app/screens/SingUpScreen/signUpForm";
import { SignUpPrivacyPolicy } from "@/app/screens/SingUpScreen/signUpPrivacyPolicy";

export const SingUpScreen = () => {
  return (
    <AuthScreenContainer>
      <Heading color="plum" level="h1" style={styles.header}>
        Create account
      </Heading>
      <View style={styles.mainContainer}>
        <SignUpForm />
        <SignUpPrivacyPolicy />
        <AuthenticationFooter
          question="Already have an account?"
          navigationLink={NavigationName.Login}
          navigationText="Log in"
        />
      </View>
    </AuthScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    alignSelf: "flex-start",
  },
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "space-between",
  },
});
