import * as express from 'express'
import * as cors from 'cors'
import { Routes } from './routes/index.js'
const app: express.Application = express()
import * as http from 'http'
import { RoutesSocket } from './socket/routes/index.js'
const server = http.createServer(app)
import * as socket from 'socket.io'

const port: number = 3030
app.use(cors({
  methods: '*',
  origin: '*'
}))
app.use(express.json())

export const io = new socket.Server(3031, { cors: { methods: ['GET', 'POST'] } })
new RoutesSocket(io)
new Routes(app)

app.listen(port, () => console.log('Server is running in port ' + port))