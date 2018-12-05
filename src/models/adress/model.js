
const joi = require('joi');

const model = joi.object().keys({

  title: joi.string(),
  details: joi.string(),
  type: joi.number().integer().min(1).max(2)
    .required(),
  coordinates: joi.Object({
    lat: joi.number(),
    lon: joi.number(),
  }),
});

module.exports = model;
