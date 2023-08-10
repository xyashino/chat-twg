import { StyleSheet, Pressable } from "react-native";
import { Avatar } from "@/app/components/common/Avatar";
import { Colors } from "@/app/constants/styles/color";
import { useNavigation } from "@react-navigation/native";
import { NavigationName } from "@/app/enums/navigation-name";
import { ConnectionInfo } from "@/app/screens/RoomsScreen/roomList/room/connectionInfo";
import { HeaderTextContent } from "@/app/screens/RoomsScreen/roomList/room/headerTextContent";
import { SetNavigationParamsTypes } from "@/app/types/root-params";

interface RoomProps {
  chatName: string;
  lastMessage?: string;
  lastMessageTime?: string;
  avatar?: string;
  isOnline?: boolean;
}

export const Room = ({
  chatName,
  lastMessage,
  lastMessageTime = "Unknown time",
  isOnline = false,
}: RoomProps) => {
  const { navigate } =
    useNavigation<SetNavigationParamsTypes<NavigationName.Chat>>();

  return (
    <Pressable
      style={[styles.roomContainer, isOnline && styles.onlineContainer]}
      onPress={() => {
        navigate(NavigationName.Chat, {
          chatName: chatName,
          chatId: `${Date.now()}`,
        });
      }}
    >
      <Avatar size="large" />
      <HeaderTextContent
        chatName={chatName}
        lastMessage={lastMessage ?? "No messages yet"}
        isOnline={isOnline}
      />
      <ConnectionInfo isOnline={isOnline} lastMessageTime={lastMessageTime} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  roomContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 12,
    gap: 16,
    position: "relative",
    overflow: "hidden",
  },
  onlineContainer: {
    backgroundColor: Colors.plum,
  },
});
