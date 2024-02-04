import bcrypt from "bcrypt";

import User from "../model/user.model.js";
import FinancialDetails from "../model/financial.model.js";

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName && !email && !password)
      res.status(401).send({ code: 401, msg: "missing field error" });
    const hashPassword = await bcrypt.hash(password, 10);
    const data = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    res
      .status(200)
      .send({ code: 200, message: "user created successfully! :)", data });
  } catch (error) {
    res.status(500).send({ code: 500, error });
  }
};

const checkEmail = async (req, res) => {
    try {
        const { email } = req.body;
        let isEmailExist = false;
        let message = 'email is fine'
        const user = await User.find({email});
        if (user.length) {
            message = 'email already exist';
            isEmailExist = true;
        }
        res.send({
            message,
            isEmailExist
        })
    } catch(err) {
        res.status(401).send({err});
    }
}

const getFinancialDetails = async (req, res) => {
    try {
        const detail = req.body;
        const response = await FinancialDetails.find({});
        console.log({ response });
        res.send("SUCCESS! ", response);
    } catch(err) {
        res.status(401).send({err});
    }
}

export { signUp, checkEmail, getFinancialDetails };
