import { NextFunction, Request, Response } from "express"
import { Schema } from "joi"

const validationMiddleware = (schema: Schema) => async (request: Request, response: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(request.body)

    next()
  } catch (e: any) {
    response.status(401).json({ error: true, message: e.message })
  }
}

export default validationMiddleware;
