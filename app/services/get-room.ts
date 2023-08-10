import { gql } from "@apollo/client";

export const GET_ROOM = gql`
  query GetRoom($roomId: ID!) {
    room(id: $roomId) {
      name
      id
      messages {
        id
        user {
          id
        }
        insertedAt
        body
      }
      user {
        id
        firstName
        lastName
      }
    }
  }
`;
