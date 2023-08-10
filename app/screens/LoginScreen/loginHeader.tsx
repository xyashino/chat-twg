import { View, StyleSheet } from "react-native";
import React from "react";
import { Heading } from "@/app/components/typography/Heading";

export const LoginHeader = () => (
  <View style={styles.container}>
    <Heading color="plum" level="h1" style={styles.title}>
      Welcome back
    </Heading>
    <Heading color="white" level="h3">
      Log in and stay in touch with everyone!
    </Heading>
  </View>
);

const styles = StyleSheet.create({
  title: {
    paddingLeft: 20,
    alignSelf: "flex-start",
  },
  container: {
    alignSelf: "flex-start",
    width: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});
