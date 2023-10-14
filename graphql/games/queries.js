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
    }
  }
`;

export {GET_MATCH}