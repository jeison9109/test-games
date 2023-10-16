import { gql } from "@apollo/client";

const GET_MATCH = gql `
query Query {
    matches {
      id
      address
      commentHost
      dateAndTime
      gameSite
      maxPlayers
      price
      statePlay
      typeGames
      currentPlayers
      phone
    }
  }
`;

export {GET_MATCH}