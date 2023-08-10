import React from "react";
import { View, StyleSheet } from "react-native";
import { Caption } from "@/app/components/typography/Caption";
import { Colors } from "@/app/constants/styles/color";

interface ConnectionInfoProps {
  isOnline: boolean;
  lastMessageTime: string;
}

export const ConnectionInfo = ({
  isOnline,
  lastMessageTime,
}: ConnectionInfoProps) => (
  <View style={styles.wrapperPosition}>
    {isOnline ? (
      <View style={styles.indicator} />
    ) : (
      <Caption color="gray">{lastMessageTime}</Caption>
    )}
  </View>
);
const styles = StyleSheet.create({
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: Colors.active,
  },
  wrapperPosition: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
