import dotenv from 'dotenv'
import express from 'express'
import routes from './routes'
import cors from 'cors'

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env',
})

app.use(cors())

const port = process.env.PORT

const app = express()

routes(app)

app.listen(port, () => {
  console.log(`Now listening on ${port}`)
})
