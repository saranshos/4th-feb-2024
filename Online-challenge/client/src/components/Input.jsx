import React, { useEffect } from "react";
import axios from 'axios';

const Input = (props) => {
  const { setInputName, emailName = "" } = props;

  useEffect(() => {
    console.log("===> ", emailName);
    if (emailName) {
      const delayDebounceFn = setTimeout(() => {
        const res = axios({
          method: "post",
          url: `http://localhost:3000/api/user/check-email`,
        });
        console.log(res);
      }, 3000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [emailName]);

  return (
    <>
      <input onChange={(e) => setInputName(e.target.value)} />
    </>
  );
};

export default Input;
