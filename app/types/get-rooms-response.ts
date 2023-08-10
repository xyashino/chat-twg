interface Room {
  id: string;
  name: string;
}
export interface GetRoomsResponse {
  usersRooms: {
    rooms: Room[];
  };
}
