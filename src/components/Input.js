import React, { useRef } from "react";
import Button from "@mui/material/Button";
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
      <input
        placeholder="Enter search keyword"
        style={{ height: "25px" }}
        ref={input}
        type="text"
      />
      <Button
        variant="outline"
        style={{
          color: "black",
          background: "white",
          marginLeft: "10px",
          height: "25px",
        }}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default Input;
