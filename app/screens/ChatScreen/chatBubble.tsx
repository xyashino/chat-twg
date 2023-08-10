import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "@/app/constants/styles/color";
import { Bubble, BubbleProps, IMessage } from "react-native-gifted-chat";
import { FontName } from "@/app/enums/styles/font-name";

export const ChatBubble = (props: BubbleProps<IMessage>) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: styles.wrapperLeft,
        right: styles.wrapperRight,
      }}
      textStyle={{
        left: styles.textLeft,
        right: styles.textRight,
      }}
    />
  );
};

const styles = StyleSheet.create({
  textLeft: { color: Colors.black, fontFamily: FontName.Poppins, fontSize: 14 },
  textRight: {
    color: Colors.white,
    fontFamily: FontName.Poppins,
    fontSize: 14,
  },
  wrapperLeft: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 0,
  },
  wrapperRight: {
    backgroundColor: Colors.plumLightAccent,
    borderBottomRightRadius: 0,
  },
});
