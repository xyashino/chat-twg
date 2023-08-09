import React from "react";
import { Text } from "react-native";
import { headingStyles } from "@/app/components/typography/Heading/styles";
import { HeadingLevels, ReusableItemProps } from "@/app/types/common";
import { Colors } from "@/app/constants/styles/color";

interface HeadingProps extends ReusableItemProps {
  level?: HeadingLevels;
}

export const Heading = ({
  children,
  level = "h1",
  color = "black",
  style,
}: HeadingProps) => (
  <Text style={[{ ...headingStyles[level], color: Colors[color] }, style]}>
    {children}
  </Text>
);
