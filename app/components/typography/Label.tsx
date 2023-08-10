import React from "react";
import { Text } from "react-native";
import { FontName } from "@/app/enums/styles/font-name";
import { ReusableItemProps } from "@/app/types/common";
import { Colors } from "@/app/constants/styles/color";

export const Label = ({
  children,
  style,
  color = "white",
}: ReusableItemProps) => (
  <Text
    style={[
      {
        fontFamily: FontName.PoppinsMedium,
        fontSize: 16,
        color: Colors[color],
      },
      style,
    ]}
  >
    {children}
  </Text>
);
