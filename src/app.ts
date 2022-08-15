import express, {Request, Response} from 'express'

const app = express()
type RequestHandler = (req: Request, res: Response) => void
const helloHandler: RequestHandler = (req, res) => {
  res.send('Hello World!')
  console.log(process.env.NODE_ENV)

}
app.get('/', helloHandler)



export default app