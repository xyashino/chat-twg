import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Room } from "@/app/screens/RoomsScreen/roomList/room";
import { useQuery } from "@apollo/client";
import { GET_ROOMS } from "@/app/services/get-rooms";
import { GetRoomsResponse } from "@/app/types/get-rooms-response";

export const RoomsList = () => {
  const { loading, error, data } = useQuery<GetRoomsResponse>(GET_ROOMS);

  if (loading) return <Text>Loading...</Text>;

  if (error || !data) return <Text>Error :(</Text>;

  return (
    <View style={styles.wrapper}>
      {data.usersRooms.rooms.map(({ id, name }) => (
        <Room chatName={name} id={id} key={id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "95%",
    gap: 12,
  },
});
