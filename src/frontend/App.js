import { useState, useEffect } from 'react'
import { useAppContext, useQuery, useMutation } from './'

const QueryFeedback = ({ loading, error, value }) => (
  <p>
    { !!loading ? <span>Loading...</span> : null }
    { !!error ? <span>ERROR</span> : null }
    { !!value ? <code>{ JSON.stringify(value.data) }</code> : null }
  </p>
)

const Users = () => {
  const queryState = useQuery`
    query {
      users{
        id,
        name
      }
    }
  `
  return <QueryFeedback { ...queryState } />
}

const User = ({ id }) => {
  const queryState = useQuery(`
    query user($id: ID!){
      user(id: $id){
        name
      }
    }
  `, { id })
  return <QueryFeedback { ...queryState } />
}

const UpdateUser = () => {
  const [ id, setId ] = useState('')
  const [ name, setName ] = useState('')
  const [ mutationState, mutate ] = useMutation`
    mutation setName($id: ID!, $name: String!){
      setName(id: $id, name: $name){
        id
      }
    }
  `
  const { value, error } = mutationState
  const success = !!value?.data.setName.id
  useEffect(() => {
     success && location.reload()
  } , [ success ])
  return (
    <div>
      <input type="text" placeholder="Enter id to update" value={ id } onChange={ e => setId(e.target.value) } />
      <input type="text" placeholder="Enter name" value={ name } onChange={ e => setName(e.target.value) } />
      <button onClick={ () => mutate({ id, name }) }>UPDATE NAME!</button>
      <QueryFeedback { ...mutationState } />
    </div>
  )
}

export default () => {
  const { apiPath } = useAppContext()
  return (
    <div>
      <span>API</span>
      <a target="_blank" href={ apiPath }>
        { apiPath }
      </a>
      <Users />
      <User id="3" />
      <UpdateUser />
    </div>
  )
}
  
  