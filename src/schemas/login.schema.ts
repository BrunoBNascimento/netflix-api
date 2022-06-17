import Joi from "joi"

const LoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
})

export default LoginSchema
