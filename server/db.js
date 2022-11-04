import pkg from 'pg'
import dotenv from 'dotenv'
const { Pool } = pkg

dotenv.config()

const pool = new Pool({
    user: 'postgres',
    password: 'process.env.DB',
    host: 'localhost',
    database: 'pernstack',
    port: '5432'
})

export default pool