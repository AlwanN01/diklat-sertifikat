import { Request, Response, NextFunction } from 'express'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: string
      HOST: string
      NAME: string
      USER: string
      PASSWORD: string
    }
  }
  type RH = (req: Request, res: Response, next?: NextFunction) => void //request handler
}
