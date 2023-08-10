import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Colors } from "@/app/constants/styles/color";
import { Input } from "@/app/components/common/Input";
import { Send } from "@/app/components/icons/Send";

interface SendMsgFooterProps {
  text: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
}

export const SendMsgFooter = ({
  text,
  onChangeText,
  onSend,
}: SendMsgFooterProps) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Type a message"
        defaultValue={text}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <Pressable onPress={onSend} style={styles.button}>
        <Send />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  input: {
    flexGrow: 1,
    borderBottomRightRadius: 0,
  },
  container: {
    width: "100%",
    backgroundColor: Colors.blueSoft,
    padding: 20,
    paddingHorizontal: 35,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
