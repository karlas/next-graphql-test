let usersDB = [
  { id : '1', name : 'Pepe' },
  { id : '2', name : 'Juan' },
  { id : '3', name : 'Alba' }
]

export default {
  Query: {
    users : () => usersDB,
    user : (obj, { id }) => usersDB.find(user => user.id === id)
  }
}
