import React from "react";
import { Pressable, PressableProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LeftArrow } from "@/app/components/icons/LeftArrow";

export const BackButton = (props: Omit<PressableProps, "onPress">) => {
  const { goBack } = useNavigation();
  return (
    <Pressable onPress={goBack} {...props}>
      <LeftArrow />
    </Pressable>
  );
};
