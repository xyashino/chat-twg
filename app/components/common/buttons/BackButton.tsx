import React from "react";
import { TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LeftArrow } from "@/app/components/icons/LeftArrow";
import {TouchableProps} from "react-native-svg";

export const BackButton = (props: Omit<TouchableProps, "onPress">) => {
  const { goBack } = useNavigation();
  return (
    <TouchableOpacity onPress={goBack} {...props}>
      <LeftArrow />
    </TouchableOpacity>
  );
};
