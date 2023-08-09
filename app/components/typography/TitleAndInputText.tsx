import React from "react";
import { Text } from "react-native";
import { FontName } from "@/app/enums/styles/font-name";
import { PropsWithColorAndChildren } from "@/app/types/common";

export const TitleAndInputText = ({ children }: PropsWithColorAndChildren) => (
  <Text
    style={{
      fontFamily: FontName.PoppinsMedium,
      fontSize: 15,
      lineHeight: 15,
    }}
  >
    {children}
  </Text>
);
