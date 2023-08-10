import React from "react";
import { View, StyleSheet } from "react-native";
import { Room } from "@/app/screens/RoomsScreen/roomList/room";

export const RoomsList = () => {
  return (
    <View style={styles.wrapper}>
      <Room
        chatName="Chat name"
        lastMessage="Last message"
        lastMessageTime="12:00"
      />
      <Room
        chatName="Chat name"
        lastMessage="Last message"
        lastMessageTime="12:00"
      />
      <Room
        chatName="Chat name"
        lastMessage="Last message"
        lastMessageTime="12:00"
      />
      <Room
        chatName="Chat name"
        lastMessage="Last message"
        lastMessageTime="12:00"
        isOnline={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: "95%",
    gap: 12,
  },
});
