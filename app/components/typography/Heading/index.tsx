import React from "react";
import { Text, TextProps } from "react-native";
import { headingStyles } from "@/app/components/typography/Heading/styles";
import { HeadingLevels, ReusableItemProps } from "@/app/types/common";
import { Colors } from "@/app/constants/styles/color";

interface HeadingProps extends Omit<ReusableItemProps, "style">, TextProps {
  level?: HeadingLevels;
}

export const Heading = ({
  children,
  level = "h2",
  color = "black",
  style,
  ...props
}: HeadingProps) => (
  <Text
    style={[{ ...headingStyles[level], color: Colors[color] }, style]}
    {...props}
  >
    {children}
  </Text>
);
