import React, { useRef } from "react";

// eslint-disable-next-line react/prop-types
const Input = ({ handleInput }) => {
  const input = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const inputValue = input.current?.value;
    handleInput(inputValue, 1);
  };

  return (
    <form style={{ marginLeft: "30px" }} onSubmit={submit}>
      <input style={{ height: "25px" }} ref={input} type="text" />
      <input style={{ marginLeft: "10px", height: "25px" }} type="submit" />
    </form>
  );
};

export default Input;
