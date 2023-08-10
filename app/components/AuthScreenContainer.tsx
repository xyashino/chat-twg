import React, { PropsWithChildren } from "react";
import { ScrollView } from "react-native";
import { Colors } from "@/app/constants/styles/color";

export const AuthScreenContainer = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: Colors.blueSoft,
      }}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {children}
    </ScrollView>
  );
};
