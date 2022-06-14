import Joi from "joi"

const CreateMovieSchema = Joi.object({
  title: Joi.string().min(5).required()
})

export default CreateMovieSchema
