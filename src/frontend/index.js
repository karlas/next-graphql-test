import 'cross-fetch/polyfill'
import { createContext, useContext } from 'react'
import ApolloBoost from 'apollo-boost'
import App from './App'
import { API_PATH } from '../constants'

const Context = createContext()

const client = new ApolloBoost({ uri : API_PATH })

export const useAppContext = () => useContext(Context)

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