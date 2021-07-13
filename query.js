const Pool = require('pg').Pool

const pool = new Pool({
    user: 'p32001f',
    host: 'reddwarf.cs.rit.edu',
    database: 'p32001f',
    password: 'eeje5EiRoo9atha3ooLo',
    port: 5432
})

export default pool;

/**
var pgp = require('pg-promise')
var db = pgp('postgres://p32001f:eeje5EiRoo9atha3ooLo@reddwarf.cs.rit.edu:5432/p32001f')

db.any("SELECT * FROM 'user'")
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })

 */