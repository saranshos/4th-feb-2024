import Router from 'express';
import userRouter from '../controller/user.router.js';

const mainRouter = Router();

mainRouter.use('/user', userRouter);

export default mainRouter;