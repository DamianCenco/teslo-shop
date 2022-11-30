import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  DB_PORT: Joi.required(),
  PORT: Joi.number().default(3000),
  HOST_API: Joi.required(),
});
