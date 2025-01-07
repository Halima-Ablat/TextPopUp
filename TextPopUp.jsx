import React, { useRef } from "react";

function TextPopUp() {

  const textFocus = useRef(null);

  function handleClick(){
    textFocus.current.focus();
    textFocus.current.value = "Hello, my name is Deny Dog 🐶."
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Click me 😊</button>
      </div>
      <label>Click the button and you will see some text</label>
      <br />
      <textarea ref={textFocus}/>
    </>
  );
}

export default TextPopUp;
