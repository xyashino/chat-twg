import React from "react";
import { HeaderContainer } from "@/app/components/HeaderContainer";
import { Search } from "@/app/components/icons/Search";
import { Rooms } from "@/app/components/icons/Rooms";
import { Heading } from "@/app/components/typography/Heading";

export const RoomScreenHeader = () => (
  <HeaderContainer
    actionSection={
      <>
        <Search />
        <Rooms />
      </>
    }
  >
    <Heading color="plum">Rooms</Heading>
  </HeaderContainer>
);
