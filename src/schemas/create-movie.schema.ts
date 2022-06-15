import Joi from "joi"

const createMovieSchema = Joi.object({
  title: Joi.string().required()
})

export default createMovieSchema
