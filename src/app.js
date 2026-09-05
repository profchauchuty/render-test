import express from 'express'
import cors from 'cors'
import sql from './database/conn.js'

const app = express()
app.use(cors())

app.get('/:username/:password', async (req, res) => {
    const { username, password } = req.params
    const [newUser] = await sql`INSERT INTO "USER" VALUES (DEFAULT, ${username}, ${password}) RETURNING ID, USERNAME`
    res.json({
        username,
        password,
        newUser
    })
})


app.listen(80)