import React, { useCallback, useEffect, useState } from "react";
import { ChatHeader } from "@/app/screens/ChatScreen/chatHeader";
import { View, StyleSheet } from "react-native";
import { SendMsgFooter } from "@/app/screens/ChatScreen/sendMsgFooter";
import { Colors } from "@/app/constants/styles/color";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

export const ChatScreen = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputText, setInputText] = useState<string>("");
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <View style={styles.container}>
      <ChatHeader />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderInputToolbar={() => null}
      />
      <SendMsgFooter
        text={inputText}
        onChangeText={(text: string) => setInputText(text)}
        onSend={() => {
          onSend([
            {
              _id: `${Math.random() * 100}`,
              text: inputText,
              createdAt: new Date(),
              user: { _id: 1 },
            },
          ]);
          setInputText("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.whiteBlue,
  },
  messageContainer: {
    flexGrow: 1,
    width: "100%",
  },
});
