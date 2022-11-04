import express from 'express'
import cors from 'cors'
import pool from './db.js'
const app = express()



//// middleware ////
app.use(cors())
app.use(express.json())  // allows to access req.body //


//// routes ////

// create //
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description])

        res.json(newTodo.rows)

    } catch (err) {
        console.error(err.message)
    }
})
//

// get //
app.get('/todos', async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM todo')

        res.json(response)

    } catch (error) {
        console.log(error.message)
    }
})
//



const port = 5000
app.listen(port, () => console.log(`Server started on port ${port}.`))
