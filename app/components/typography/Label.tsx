import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { FontName } from "@/app/enums/styles/font-name";
import { PropsWithColorAndChildren } from "@/app/types/common";

export const Label = ({ children }: PropsWithColorAndChildren) => (
  <Text
    style={{
      fontFamily: FontName.PoppinsMedium,
      fontSize: 16,
    }}
  >
    {children}
  </Text>
);
