import * as express from 'express'
import * as cors from 'cors'
import { Routes } from './routes'

const port: number = 3030
const app: express.Application = express()

app.use(cors())

new Routes(app)

app.listen(port, () => console.log('Server is running in port ' + port))