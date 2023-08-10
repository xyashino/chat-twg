import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/app/constants/styles/color";
import { Input } from "@/app/components/common/Input";
import { Send } from "@/app/components/icons/Send";
import { InputToolbar } from "react-native-gifted-chat";

interface ChatInputFooter {
  sendMessage: (msg: string) => void;
}

export const ChatInputFooter = ({ sendMessage }: ChatInputFooter) => {
  const [text, setText] = useState("");

  const handlePress = () => {
    sendMessage(text);
    setText("");
  };

  return (
    <InputToolbar
      containerStyle={styles.container}
      renderComposer={() => (
        <Input
          style={styles.input}
          defaultValue={text}
          onChangeText={setText}
          placeholder="Type a message..."
        />
      )}
      renderSend={() => (
        <TouchableOpacity onPress={handlePress}>
          <Send />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
    borderBottomRightRadius: 0,
  },
  container: {
    width: "100%",
    backgroundColor: Colors.blueSoft,
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    flexDirection: "row",
    alignItems: "center",
  },
});
