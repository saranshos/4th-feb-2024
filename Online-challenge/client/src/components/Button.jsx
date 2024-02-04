import React, { useState } from "react";

const Button = (props) => {
  const { buttonName = "Submit", setButtonClicked, buttonClicked } = props;
  return (
    <>
      <button onClick={() => setButtonClicked(true)} disabled={buttonClicked}>{buttonName}</button>
    </>
  );
};

export default Button;
