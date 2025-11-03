import { Router } from 'express';
import {
  addMemberProject,
  createProject,
  updateProject,
} from '../controllers/projectController.js';

const projectRouter = Router();

projectRouter.post('/', createProject);
projectRouter.put('/', updateProject);
projectRouter.post('/:projectId/addMember', addMemberProject);

export default projectRouter;
