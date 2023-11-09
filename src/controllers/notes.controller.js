const { NOTE_ERRORS } = require('../constants/errors.constants')
const noteService = require('../services/notes.services')

const notesController = {
    getNotes: async (req, res, next) => {
        try {
            const notes = await noteService.getNotes(req.query)

            return res.status(201).json({
                data: notes
            })
        }catch(err){
            next(err)
        }
      
    },

    getNote: async (req, res, next) => {
        try {
            const note = await noteService.getNote(req.params.id)

            if (!note) {
                return NOTE_ERRORS.NOT_FOUND
            }

            return res.status(201).json({
                data: note
            })
        } catch (err) {
            next(err)
        }
    },


}

module.exports = {
  notesController
}