import { Router } from 'express';
import {
  addMember,
  getUserWorkspaces,
} from '../controllers/workspaceController.js';

const workspaceRouter = Router();

workspaceRouter.get('/', getUserWorkspaces);
workspaceRouter.post('/add-member', addMember);

export default workspaceRouter;
