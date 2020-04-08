import { ApolloServer } from 'apollo-server-micro'
import resolvers from './resolvers'
import typeDefs from './typedefs'
import { API_PATH } from '../constants'

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export default apolloServer.createHandler({ path: API_PATH })
