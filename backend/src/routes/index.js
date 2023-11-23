import express from "express";
import { createUser, getUsers } from "../Controllers/user.controller.js";
import { createNote, getNote, updateNote, deleteNote } from "../Controllers/note.controller.js";
import { createCourse, getCourse, updateCourse, deleteCourse } from '../controllers/course.js';
import { createSchool, getSchool, updateSchool, deleteSchool } from '../Controllers/school.controller.js';
import { getAllTokens, createToken, updateToken, deleteToken } from '../controllers/tokenController.js';

const router = express.Router();

router.post('/user', createUser);
router.get('/users', getUsers);

router.post('/note', createNote);
router.get('/note/:id', getNote); // Note the correction here in the route definition
router.put('/note/:id', updateNote);
router.delete('/note/:id', deleteNote);

router.post('/courses', createCourse);
router.get('/courses/:id', getCourse);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

router.post('/schools', createSchool);
router.get('/schools/:id', getSchool);
router.put('/schools/:id', updateSchool);
router.delete('/schools/:id', deleteSchool);

// Token routes
router.get('/tokens', getAllTokens);
router.post('/token', createToken);
router.put('/token/:id', updateToken);
router.delete('/token/:id', deleteToken);

export default router;