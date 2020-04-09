import { useAppContext, useQuery } from './'

const QueryFeedback = ({ loading, error, value }) => (
  <p>
    { !!loading ? <span>Loading...</span> : null }
    { !!error ? <span>ERROR</span> : null }
    { !!value ? <code>{ JSON.stringify(value.data) }</code> : null }
  </p>
)

const Users = () => {
  const queryResult = useQuery`
    query {
      users{
        id,
        name
      }
    }
  `
  return <QueryFeedback { ...queryResult } />
}

const User = ({ id }) => {
  const queryResult = useQuery(`
    query user($id: ID!){
      user(id: $id){
        name
      }
    }
  `, { id })
  return <QueryFeedback { ...queryResult } />
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
    </div>
  )
}
  
  