import express from 'express';
import { getAllTasks, addTask, deleteTask } from '../controllers/messages';

const router = express.Router()

router.route('/')
  .get(getAllTasks)
  .post(addTask)
  

router.route('/:id')
  .delete(deleteTask)
  
export default router