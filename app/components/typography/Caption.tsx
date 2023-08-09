import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { FontName } from "@/app/enums/styles/font-name";
import { ReusableItemProps } from "@/app/types/common";
import { Colors } from "@/app/constants/styles/color";

const captionStyles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: "bold",
        lineHeight: 16,
        fontSize: 12,
      },
      android: {
        fontFamily: FontName.Poppins,
        fontSize: 10,
        lineHeight: 10,
      },
    }),
  },
});

export const Caption = ({
  children,
  color = "black",
  style = {},
}: ReusableItemProps) => (
  <Text style={[{ ...captionStyles.text, color: Colors[color] }, style]}>
    {children}
  </Text>
);
