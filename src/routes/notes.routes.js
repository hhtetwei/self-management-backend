const { Router } = require('express')
const validate = require('../middlewares/validateSchema')
const schema = require('../schemas/notes.schemas')
const { notesController } = require('../controllers/notes.controller')

const router = Router()

router.get('/', validate(schema.GET_NOTES), notesController.getNotes)

router.get('/:id', validate(schema.GET_NOTE), notesController.getNote)

router.post('/', validate(schema.CREATE_NOTE), notesController.createNote)

router.patch('/:id', validate(schema.UPDATE_NOTE), notesController.editNote)

router.delete('/:id', validate(schema.DELETE_NOTE), notesController.deleteNote)

module.exports = router
