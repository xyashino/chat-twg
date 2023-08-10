interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Message {
  body: string;
  insertedAt: string;
  id: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

interface Room {
  id: string;
  messages: Message[];
  name: string;
  user: User;
}
export interface GetRoomResponse {
  room: Room;
}
