const Joi = require('joi')
Joi.objectid = require('joi-objectid')(Joi)

const schema = Object.freeze({
  CREATE_TODO: Joi.object({
    body: Joi.object({
      to_do: Joi.string().required(),
      important: Joi.boolean().default(false),
      due_date: Joi.date().required(),
    }),
  }),

  GET_ALL_TODO: Joi.object({
    query: Joi.object({ sort: Joi.any().default('-createdAt') }),
  }),

  GET_TODO: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),

  EDIT_TODO: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),

    body: Joi.object({
      to_do: Joi.string().required(),
      important: Joi.boolean().default(false),
      due_date: Joi.date().required(),
    }),
  }),

  DELETE_TODO: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),
})

module.exports = schema
