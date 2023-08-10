import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { NavigationName } from "@/app/enums/navigation-name";
import { Colors } from "@/app/constants/styles/color";
import { FontName } from "@/app/enums/styles/font-name";

interface AuthenticationFooterProps {
  question: string;
  navigationLink: NavigationName;
  navigationText: string;
}

export const AuthenticationFooter = ({
  navigationText,
  navigationLink,
  question,
}: AuthenticationFooterProps) => (
  <View style={styles.container}>
    <Text style={styles.question}>{question}</Text>
    <Link to={`/${navigationLink}`}>
      <Text style={styles.link}>{navigationText}</Text>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    width: "70%",
    marginTop: 20,
  },
  question: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: FontName.Poppins,
  },
  link: {
    color: Colors.plum,
    fontSize: 16,
    fontFamily: FontName.PoppinsBold,
  },
});
