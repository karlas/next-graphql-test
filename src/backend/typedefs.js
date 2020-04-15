import { gql } from 'apollo-server-micro'

export default gql`
  type Query {
    users: [ User! ]!
    user(id : ID!): User
  }
  type Mutation {
    setName(id: ID!, name: String!): User
  }
  type User {
    id : ID!
    name: String!
  }
`
