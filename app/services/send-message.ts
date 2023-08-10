import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation SendMessage($body: String!, $roomId: ID!) {
    sendMessage(body: $body, roomId: $roomId) {
      id
    }
  }
`;
