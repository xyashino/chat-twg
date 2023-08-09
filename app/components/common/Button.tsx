import React, { PropsWithChildren } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { ButtonText } from "@/app/components/typography/ButtonText";
import { Colors } from "@/app/constants/styles/color";

interface Props extends PropsWithChildren, Pick<PressableProps, "onPressIn"> {
  type?: "default" | "disabled" | "pressed";
}

export const Button = ({ children, type = "default", ...props }: Props) => {
  return (
    <Pressable
      style={[buttonStyle.defaultStyles, buttonStyle[type]]}
      {...props}
    >
      <ButtonText color="white">{children}</ButtonText>
    </Pressable>
  );
};

const buttonStyle = StyleSheet.create({
  defaultStyles: {
    width: "90%",
    paddingVertical: 10,
    borderRadius: 20,
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
