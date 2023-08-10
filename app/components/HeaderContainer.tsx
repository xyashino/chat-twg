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
    backgroundColor: Colors.blueSoft,
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    marginBottom: 0,
  },
  actionsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
});
