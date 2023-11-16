const mongoose = require('mongoose')

const toTravelSchema = new mongoose.Schema(
  {
    place: {
      type: String,
    },

    priority: {
      type: String,
      enum: ['totally', 'middle'],
    },

    planned_year: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = new mongoose.model('toTravel', toTravelSchema, 'to_travel')
