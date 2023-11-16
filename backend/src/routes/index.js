import express from "express";
import { createUser, getUsers } from "../Controllers/user.controller.js";
import { createNote, getNote, updateNote, deleteNote} from "../Controllerss/note.controller.js";

const router = express.Router()

router.post('/user', createUser)
router.get('/users', getUsers)
router.post('/note', createNote)
router.get('/note:id',getNote)
router.put('/note:id', updateNote)
router.delete('/note:id', deleteNote)


export default router;