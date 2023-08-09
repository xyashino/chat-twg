import React from "react";
import { Text } from "react-native";
import { FontName } from "@/app/enums/styles/font-name";
import { ReusableItemProps } from "@/app/types/common";
import { Colors } from "@/app/constants/styles/color";

export const ButtonText = ({
  children,
  color = "white",
  style,
}: ReusableItemProps) => (
  <Text
    style={[
      {
        fontFamily: FontName.PoppinsSemiBold,
        fontSize: 16,
        letterSpacing: 1,
        color: Colors[color],
        textAlign: "center",
      },
      style,
    ]}
  >
    {children}
  </Text>
);
