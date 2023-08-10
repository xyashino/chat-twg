import React from "react";
import { View, StyleSheet } from "react-native";
import { Phone } from "@/app/components/icons/Phone";
import { VideoCall } from "@/app/components/icons/VideoCall";
import { BackButton } from "@/app/components/common/buttons/BackButton";
import { Avatar } from "@/app/components/common/Avatar";
import { Heading } from "@/app/components/typography/Heading";
import { Caption } from "@/app/components/typography/Caption";
import { HeaderContainer } from "@/app/components/HeaderContainer";
import { useRoute } from "@react-navigation/native";
import { GetNavigationParamsTypes } from "@/app/types/root-params";
import { NavigationName } from "@/app/enums/navigation-name";

export const ChatHeader = () => {
  const { params } = useRoute<GetNavigationParamsTypes<NavigationName.Chat>>();
  const chatName = params.chatName ?? "Default chat name";

  return (
    <HeaderContainer
      actionSection={
        <>
          <Phone />
          <VideoCall />
        </>
      }
    >
      <View style={styles.contentWrapper}>
        <BackButton />
        <Avatar />
        <View style={styles.textWrapper}>
          <Heading color={"plum"} level="h4">
            {chatName}
          </Heading>
          <Caption color="white">last seen 12:00</Caption>
        </View>
      </View>
    </HeaderContainer>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
