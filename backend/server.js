import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import { serve } from 'inngest/express';
import { functions, inngest } from './inngest/index.js';

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// routes
app.get('/', (req, res) => res.send('Api is Working.'));

app.use('/api/inngest', serve({ client: inngest, functions }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
