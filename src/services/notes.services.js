const { NOTE_ERRORS } = require('../constants/errors.constants')
const noteModel = require('../models/notes.models')

const noteService = {
  getNotes: async ({ query }) => {
    const { sort } = query

    let filter = {}

    const page = query.page * 1 || 1
    const limit = query.limit === 0 ? query.limit : query.limit * 1 || 10
    const skip = (page - 1) * limit

    const [data, count] = await Promise.all([
      noteModel.find(filter).limit(+limit).skip(+skip).sort(sort),
      noteModel.find(filter).countDocuments(),
    ])

    return { data, count }
  },

  getNote: async (id) => {
    const note = await noteModel.findById(id)

    if (!note) {
      return NOTE_ERRORS.NOT_FOUND
    }

    return note
  },

  createNote: async (payload) => {
    const note = await noteModel.create(payload)

    return note
  },

  deleteNote: async (id) => {
    const note = await noteModel.findByIdAndDelete(id)
    if (!note) {
      return NOTE_ERRORS.NOT_FOUND
    }
    return note
  },
}

module.exports = {
  noteService,
}
