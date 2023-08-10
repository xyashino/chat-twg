import React from "react";
import { View, StyleSheet } from "react-native";
import { Heading } from "@/app/components/typography/Heading";
import { Caption } from "@/app/components/typography/Caption";

interface HeaderTextContentProps {
  chatName: string;
  lastMessage: string;
  isOnline: boolean;
}

export const HeaderTextContent = ({
  lastMessage,
  isOnline,
  chatName,
}: HeaderTextContentProps) => {
  const textColor = isOnline ? "white" : "black";
  return (
    <View style={styles.container}>
      <Heading level="h4" color={textColor}>
        {chatName}
      </Heading>
      <Caption color={textColor}>{lastMessage}</Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
