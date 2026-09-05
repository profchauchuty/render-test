import express from 'express'
import cors from 'cors'
import userRouter from './routes/usuario.router.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/usuarios', userRouter)

app.listen(80)