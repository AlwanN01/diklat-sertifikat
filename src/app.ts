import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from 'router/sertifikat'
import path from 'path'
import compression from 'compression'
import helmet from 'helmet'
import 'express-async-errors'
import 'model/_sync'
const app = express()

app.use(cors({ credentials: true, origin: 'http://localhost:3001' }))
app.use(compression())
app.use(helmet({ contentSecurityPolicy: false }))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(router)
app.use(express.static('public', { extensions: ['html'] }))

export default app
