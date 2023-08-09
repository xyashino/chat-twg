import { StyleSheet } from "react-native";
import { FontName } from "@/app/enums/styles/font-name";
import { HeadingLevels } from "@/app/types/common";

export const headingStyles = StyleSheet.create({
  h1: {
    fontFamily: FontName.PoppinsBold,
    fontSize: 36,
    fontWeight: "bold",
  },
  h2: {
    fontFamily: FontName.PoppinsBold,
    fontSize: 28,
  },
  h3: {
    fontFamily: FontName.PoppinsBold,
    fontSize: 22,
  },
  h4: {
    fontFamily: FontName.PoppinsBold,
    fontSize: 18,
  },
} as Record<HeadingLevels, object>);
