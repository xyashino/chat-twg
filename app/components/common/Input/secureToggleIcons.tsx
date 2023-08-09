import React from "react";
import { Pressable } from "react-native";
import { VisionLow } from "@/app/components/icons/VisionLow";
import { Vision } from "@/app/components/icons/Vision";

interface Props {
  isSecure: boolean;
  toggleSecure: () => void;
}

export const SecureToggleIcons = ({ isSecure, toggleSecure }: Props) => {
  return (
    <Pressable
      onPress={toggleSecure}
      style={{
        position: "absolute",
        right: 20,
        height: "100%",
        justifyContent: "center",
      }}
    >
      {isSecure ? <VisionLow /> : <Vision />}
    </Pressable>
  );
};
