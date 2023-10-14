import { gql } from "@apollo/client";

const EDIT_MATCH = gql`
mutation Mutation($data: MatchUpdateInput!, $where: MatchWhereUniqueInput!) {
    updateOneMatch(data: $data, where: $where) {
      address
      commentHost
      createdAt
      currentPlayers
      dateAndTime
      gameSite
      id
      maxPlayers
      price
      statePlay
      typeGames
    }
  }
`
export  {EDIT_MATCH};