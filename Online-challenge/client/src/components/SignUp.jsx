import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  firstName,
  lastName,
  email,
  password,
  baseUrl,
} from "../utils/constants.js";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

const SignUp = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [emailName, setEmailName] = useState("");
  const [passwordName, setParsswordName] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      const userDetail = {
        firstName: fName,
        lastName: lName,
        email: emailName,
        password: passwordName,
      };
      const signUp = async () => {
        try {
          const { data } = await axios({
            method: "post",
            url: `http://localhost:3000/api/user/singup`,
            // headers: {},
            data: {
              ...userDetail,
            },
          });
        //   setButtonClicked(false);
          console.log({ data });
        } catch (err) {
          return;
        }
      };
      signUp();
    }
  }, [buttonClicked]);

  return (
    <>
      <div>
        {firstName}: <Input setInputName={setFName} />
      </div>
      <div>
        {lastName}: <Input setInputName={setLName} />
      </div>
      <div>
        {email}: <Input emailName={emailName} setInputName={setEmailName}/>
      </div>
      <div>
        {password}: <Input setInputName={setParsswordName} />
      </div>
      <Button
        buttonName={"Sign up"}
        setButtonClicked={setButtonClicked}
        buttonClicked={buttonClicked}
      />
    </>
  );
};

export default SignUp;
