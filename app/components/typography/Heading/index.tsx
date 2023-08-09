import React from "react";
import { Text } from "react-native";
import { headingStyles } from "@/app/components/typography/Heading/styles";
import { HeadingLevels, PropsWithColorAndChildren } from "@/app/types/common";
import { ColorName, Colors } from "@/app/constants/styles/color";

interface HeadingProps extends PropsWithColorAndChildren {
  level?: HeadingLevels;
}

export const Heading = ({
  children,
  level = "h1",
  color = "black",
}: HeadingProps) => (
  <Text style={{ ...headingStyles[level], color: Colors[color] }}>
    {children}
  </Text>
);
