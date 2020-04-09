import { gql } from 'apollo-server-micro'

export default gql`
  type Query {
    users: [ User! ]!
    user(id : ID!): User
  }
  type User {
    id : ID!
    name: String!
  }
`
