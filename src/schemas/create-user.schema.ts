import Joi from "joi"

const CreateUser = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
})

export default CreateUser
