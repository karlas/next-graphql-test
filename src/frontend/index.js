import 'cross-fetch/polyfill'
import { createContext, useContext } from 'react'
import ApolloBoost, { gql } from 'apollo-boost'
import App from './App'
import { useAsync, useAsyncFn } from 'react-use'
import { API_PATH } from '../constants'

const Context = createContext()

const client = new ApolloBoost({ uri : API_PATH })

export const useAppContext = () => useContext(Context)
export const useQuery = (query, variables = {}) => useAsync(() => client.query({ 
  variables,
  query : gql(query) 
}))
export const useMutation = mutation => useAsyncFn((variables = {}) => client.mutate({ 
  variables,
  mutation : gql(mutation) 
}))

export default () => {
  const value = {
    apiPath : API_PATH 
  }
  return (
    <Context.Provider value={ value }>
      <App />
    </Context.Provider>
  )
}