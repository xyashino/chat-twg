import React, { PropsWithChildren } from "react";
import { Pressable, PressableProps, StyleSheet, TextStyle } from "react-native";
import { ButtonText } from "@/app/components/typography/ButtonText";
import { Colors } from "@/app/constants/styles/color";

interface Props extends PropsWithChildren, Pick<PressableProps, "onPressIn"> {
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
    <Pressable
      style={[buttonStyle.defaultStyles, buttonStyle[type], style]}
      {...props}
    >
      <ButtonText color="white">{children}</ButtonText>
    </Pressable>
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
