import Router from "express";
import { signUp, checkEmail, getFinancialDetails } from "./user.controller.js";

const userRouter = Router();

userRouter.route("/singup").post(signUp);
userRouter.route("/check-email").post(checkEmail);
userRouter.route("/financial-details").post(getFinancialDetails);

export default userRouter;
