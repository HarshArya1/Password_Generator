import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [numberChanged, setNumberChange] = useState(false);
  const [charChanged, setCharChange] = useState(false);
  const [uppercase, setUppercase] = useState(false);

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (numberChanged) {
      str += "0123456789";
    }
    if (charChanged) {
      str += "@#$%!<>/?~-+^&*";
    }
    if (uppercase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numberChanged, charChanged, uppercase]);

  return (
    <>
      <h1>Password is: {password}</h1>
      <div className="second">
        <input
          type="range"
          min={5}
          max={50}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
        <label>Length is: ({length})</label>

        <input
          type="checkbox"
          checked={numberChanged}
          onChange={() => setNumberChange(!numberChanged)}
        ></input>
        <label>Number</label>

        <input
          type="checkbox"
          checked={charChanged}
          onChange={() => setCharChange(!charChanged)}
        ></input>
        <label>Special Character</label>

        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        ></input>
        <label>Add Uppercase letter</label>
      </div>
      <button className="gen" onClick={generatePassword}>
        Generate Password
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />
);
