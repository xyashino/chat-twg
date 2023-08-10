import React from "react";
import { View, StyleSheet } from "react-native";
import { Phone } from "@/app/components/icons/Phone";
import { VideoCall } from "@/app/components/icons/VideoCall";
import { BackButton } from "@/app/components/common/buttons/BackButton";
import { Avatar } from "@/app/components/common/Avatar";
import { Heading } from "@/app/components/typography/Heading";
import { HeaderContainer } from "@/app/components/HeaderContainer";
import { Caption } from "@/app/components/typography/Caption";

interface Props {
  chatName?: string;
}

export const ChatHeader = ({ chatName }: Props) => {
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
          <Heading
            color={"plum"}
            level="h4"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {chatName || "Loading..."}
          </Heading>
          <Caption color="white">Active now</Caption>
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
    gap: 6,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 1,
  },
});
