import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'model/_sync'
const app = express()
app.use(cors({ credentials: true, origin: 'http://localhost:3001' }))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const helloHandler: RH = (req, res) => {
  res.status(200)
  res.send('<h1>Hello World!</h1>')
  console.log(process.env.NODE_ENV)
}
app.get('/', helloHandler)

export default app
