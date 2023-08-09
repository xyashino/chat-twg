import React from "react";
import { Image, StyleSheet } from "react-native";
import { Profile } from "@/app/components/icons/Profile";

interface Props {
  size?: "small" | "medium" | "large";
  source?: string;
}

export const Avatar = ({ size = "medium", source }: Props) => {
  const styles = [avatarStyle.default, avatarStyle[size]];
  if (source) return <Image source={source} style={styles} />;
  return <Profile style={styles} />;
};

const avatarStyle = StyleSheet.create({
  default: {
    borderRadius: 50,
    aspectRatio: 1,
  },
  small: {
    width: 24,
  },
  medium: {
    width: 44,
  },
  large: {
    width: 64,
  },
});
