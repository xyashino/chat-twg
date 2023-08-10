import gql from 'graphql-tag';

export const MESSAGE_ADDED_SUBSCRIPTION = gql`
  subscription MessageAdded {
    messageAdded(roomId:"f4416726-c0c7-4993-877f-0f1ba8433f61") {
      id
      body
      insertedAt
      user {
        id
        firstName
      }
    }
  }
`;