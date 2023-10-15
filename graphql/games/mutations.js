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

const CREATE_MATCH = gql`
mutation CreateOneMatch($data: MatchCreateInput!) {
  createOneMatch(data: $data) {
    address
    commentHost
    currentPlayers
    dateAndTime
    gameSite
    maxPlayers
    price
    statePlay
    typeGames
  }
}`

const DELETE_MATCH = gql`mutation DeleteOneMatch($where: MatchWhereUniqueInput!) {
  deleteOneMatch(where: $where) {
    address
    commentHost
    createdAt
    currentPlayers
    dateAndTime
    gameSite
    maxPlayers
    price
    statePlay
    typeGames
  }
}`


export  {EDIT_MATCH, CREATE_MATCH,DELETE_MATCH};