const { Pool } = require('pg');
require("dotenv").config();


const connectionString = 'postgres://smak_db_user:rrhgl8LoyflNkYTvCZFGm9Sv0gISavWE@dpg-cdqg9pirrk09t4bgsek0-a.ohio-postgres.render.com/smak_db'
 
const pool = new Pool({
  connectionString,
})

// const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } = process.env;
// const pool = new Pool({
//   user: PG_USER,
//   host: PG_HOST,
//   database: PG_DATABASE,
//   password: PG_PASSWORD,
//   port: PG_PORT,
// })

module.exports = {
  query: (text, params) => pool.query(text, params),
}
