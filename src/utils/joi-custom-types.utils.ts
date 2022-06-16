import Joi from "joi"

export const joiEnumOfString = (enumerator: Object) => {
  return Joi.string().valid(...Object.values(enumerator))
}
