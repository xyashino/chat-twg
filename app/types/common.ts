import { ColorName } from "@/app/constants/styles/color";
import { PropsWithChildren } from "react";
import { TextStyle } from "react-native";

export type HeadingLevels = "h1" | "h2" | "h3" | "h4";

export interface ReusableItemProps extends PropsWithChildren {
  color?: ColorName;
  style?: TextStyle;
}
