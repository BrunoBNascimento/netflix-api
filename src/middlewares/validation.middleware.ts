import { NextFunction, Request } from "express"
import { Schema } from "joi"
import ValidationException from "../exceptions/validation.exception"
import { CustomResponse } from "../interfaces/custom-response.interface"

const validationMiddleware = (schema: Schema) => async (request: Request, response: CustomResponse, next: NextFunction) => {
  try {
    const validated = await schema.validate(request.body, { abortEarly: false })

    if (validated.error) {
      throw new ValidationException("Campos inválidos", validated.error?.details)
    }

    next()
  } catch (e) {
    response.errorHandler && response.errorHandler(e)
  }
}

export default validationMiddleware;
