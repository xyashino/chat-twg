import React, { PropsWithChildren } from "react";
import { Colors } from "@/app/constants/styles/color";
import { ScrollView, View } from "react-native";

export const ScreenContainer = ({ children }: PropsWithChildren) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: Colors.whiteBlue,
        position: "relative",
      }}
    >
      <ScrollView
        stickyHeaderIndices={[0]}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
};
