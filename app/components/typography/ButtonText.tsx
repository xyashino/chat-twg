import React from "react";
import { Text } from "react-native";
import { FontName } from "@/app/enums/styles/font-name";
import { PropsWithColorAndChildren } from "@/app/types/common";

export const ButtonText = ({ children }: PropsWithColorAndChildren) => (
  <Text
    style={{
      fontFamily: FontName.PoppinsSemiBold,
      fontSize: 16,
      letterSpacing: 1,
    }}
  >
    {children}
  </Text>
);
