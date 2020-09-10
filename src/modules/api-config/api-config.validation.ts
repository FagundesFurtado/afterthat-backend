import * as Joi from '@hapi/joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().required(),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .required(),
});
