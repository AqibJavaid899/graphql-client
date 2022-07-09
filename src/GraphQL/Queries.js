import { gql } from "@apollo/client";

export const LOAD_ALL_USERS_DATA = gql`
  query {
    getAllUserData {
      id
      firstName
      lastName
      email
      password
    }
  }
`;
