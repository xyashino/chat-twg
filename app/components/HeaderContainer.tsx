import React, { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/app/constants/styles/color";

interface Props extends PropsWithChildren {
  actionSection: React.ReactNode;
}

export const HeaderContainer = ({ children, actionSection }: Props) => (
  <View style={headerContainerStyle.mainContainer}>
    <View style={headerContainerStyle.contentWrapper}>
      {children}
      <View style={headerContainerStyle.actionsWrapper}>{actionSection}</View>
    </View>
  </View>
);

const headerContainerStyle = StyleSheet.create({
  mainContainer: {
    minWidth: "100%",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 115,
    backgroundColor: Colors.blueSoft,
    padding: 20,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },
  actionsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
});
