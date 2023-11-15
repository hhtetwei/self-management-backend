const Joi = require('joi')
Joi.objectid = require('joi-objectid')(Joi)

const schema = object.freeze({
  GET_ALL_TRAVEL: Joi.object({
    query: Joi.object({
      sort: Joi.string().default('-createdAt'),
      limit: Joi.string().default(10),
      skip: Joi.string(),
      page: Joi.string().default(1),
    }),
  }),

  GET_TRAVEL: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),

  CREATE_TRAVEL: Joi.object({
    body: Joi.object({
      place: Joi.string().required(),
      priority: Joi.string().valid('totally', 'middle'),
      planned_year: Joi.date().format('YYYY').allow(''),
    }),
  }),

  EDIT_TRAVEL: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),

    body: Joi.object({
      place: Joi.string(),
      priority: Joi.string().valid('totally', 'middle'),
      planned_year: Joi.date(),
    }),
  }),

  DELETE_TRAVEL: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),
})

module.exports = schema
