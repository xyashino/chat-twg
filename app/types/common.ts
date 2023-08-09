import { ColorName } from "@/app/constants/styles/color";
import { PropsWithChildren } from "react";

export type HeadingLevels = "h1" | "h2" | "h3" | "h4";
export interface PropsWithColorAndChildren extends PropsWithChildren {
  color?: ColorName;
}
