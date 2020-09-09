import * as Joi from '@hapi/joi';

export const validationSchema = Joi.object({
    PORT: Joi.number().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_ROOT_PASSWORD: Joi.string(),
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .required(),
});

