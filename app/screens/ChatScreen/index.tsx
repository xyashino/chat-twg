import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { GiftedChat } from "react-native-gifted-chat";
import { ChatHeader } from "@/app/screens/ChatScreen/chatHeader";
import { ChatInputFooter } from "@/app/screens/ChatScreen/chatInputFooter";
import { Colors } from "@/app/constants/styles/color";
import { GetNavigationParamsTypes } from "@/app/types/root-params";
import { NavigationName } from "@/app/enums/navigation-name";
import { useChatLogic } from "@/app/hooks/useChatLogic";
import { ChatBubble } from "@/app/screens/ChatScreen/chatBubble";

export const ChatScreen = () => {
  const {
    params: { id: roomId },
  } = useRoute<GetNavigationParamsTypes<NavigationName.Chat>>();

  const { data, messages, sendMessage } = useChatLogic(roomId);

  const myId = data?.room?.user?.id || "fallbackId";

  const handleSend = useCallback(
    (messageText: string) => {
      if (!messageText) return;
      return sendMessage(messageText);
    },
    [sendMessage],
  );

  return (
    <View style={styles.container}>
      <ChatHeader chatName={data?.room?.name || "loading..."} />
      <GiftedChat
        messages={messages}
        onSend={(msgs) => handleSend(msgs[0].text)}
        user={{ _id: myId }}
        messagesContainerStyle={styles.messageContainer}
        renderInputToolbar={() => <ChatInputFooter sendMessage={handleSend} />}
        renderBubble={(props) => <ChatBubble {...props} />}
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
    paddingBottom: 40,
  },
});
