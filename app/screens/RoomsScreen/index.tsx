import React from "react";
import { ScreenContainer } from "@/app/components/ScreenContainer";
import { RoomScreenHeader } from "@/app/screens/RoomsScreen/roomScreenHeader";
import { RoomsList } from "@/app/screens/RoomsScreen/roomList";

export const RoomsScreen = () => (
  <ScreenContainer>
    <RoomScreenHeader />
    <RoomsList />
  </ScreenContainer>
);
