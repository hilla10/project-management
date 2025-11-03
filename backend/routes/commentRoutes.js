import { Router } from 'express';
import {
  addComment,
  getTaskComment,
} from '../controllers/commentController.js';

const commentRouter = Router();

commentRouter.post('/', addComment);
commentRouter.get('/:taskId', getTaskComment);

export default commentRouter;
