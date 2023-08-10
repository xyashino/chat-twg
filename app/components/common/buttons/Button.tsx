import React, { PropsWithChildren } from "react";
import { StyleSheet, TextStyle, TouchableOpacity} from "react-native";
import { ButtonText } from "@/app/components/typography/ButtonText";
import { Colors } from "@/app/constants/styles/color";
import {TouchableProps} from "react-native-svg";

interface Props
  extends PropsWithChildren,
    Omit<TouchableProps, "style" | "children"> {
  type?: "default" | "disabled" | "pressed";
  style?: TextStyle;
}

export const Button = ({
  children,
  type = "default",
  style,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      style={[buttonStyle.defaultStyles, buttonStyle[type], style]}
      {...props}
    >
      <ButtonText color="white">{children}</ButtonText>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  defaultStyles: {
    width: "85%",
    paddingVertical: 12,
    borderRadius: 12,
  },
  default: {
    backgroundColor: Colors.plum,
  },
  disabled: {
    backgroundColor: Colors.graySoft,
  },
  pressed: {
    backgroundColor: Colors.plumAccent,
  },
});
