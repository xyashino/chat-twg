import React from "react";
import { Text, StyleSheet } from "react-native";
import { Caption } from "@/app/components/typography/Caption";
import { Colors } from "@/app/constants/styles/color";

export const SignUpPrivacyPolicy = () => (
  <Caption color="white" style={styles.customCaption}>
    By signing up you agree with &nbsp;
    <Text style={styles.link}>Terms and Conditions</Text>
    &nbsp; and &nbsp;
    <Text style={styles.link}>Privacy Policy</Text>
  </Caption>
);

const styles = StyleSheet.create({
  customCaption: {
    padding: 12,
    fontSize: 13,
    textAlign: "center",
    width: "80%",
  },
  link: {
    color: Colors.blue,
    textDecorationLine: "underline",
  },
});
