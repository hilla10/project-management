import { Router } from 'express';
import {
  createTask,
  deleteTask,
  updateTask,
} from '../controllers/taskController.js';

const taskRouter = Router();

taskRouter.post('/', createTask);
taskRouter.put('/:id', updateTask);
taskRouter.post('/delete', deleteTask);

export default taskRouter;
