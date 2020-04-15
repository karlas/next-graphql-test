let usersDB = [
  { id : '1', name : 'Pepe' },
  { id : '2', name : 'Juan' },
  { id : '3', name : 'Alba' }
]

export default {
  Query: {
    users : () => usersDB,
    user : (obj, { id }) => usersDB.find(user => user.id === id)
  },
  Mutation: {
    setName : (obj, {id, name}) => {
      let updatedUser = usersDB.find(user => user.id === id)
      if (!updatedUser){
        return null
      }
      usersDB = usersDB.map(user => {
        if (id !== user.id){
          return user
        }
        updatedUser.name = name
        return updatedUser
      })
      return updatedUser
    }
  }
}
