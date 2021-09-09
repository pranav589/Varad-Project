import React, { useState, useEffect, useRef } from "react";
// import data from "../data";
import "./Passcode.css";

function Passcode({
  userData,
  setIsLoggedIn,
  isLoggedIn,
  setUserData,
  editStatus,
}) {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  const handleSubmit = () => {
    if (userData.passcode == result) {
      console.log("Logged In");
      setResult("");
      setIsLoggedIn(true);
    } else {
      alert("Error");
    }
  };

  const handleCheckIn = () => {
    if (isLoggedIn) {
      editStatus();
    }
  };
  //   console.log(userData);

  const handleCheckOut = () => {};

  return (
    <div className="calc-app">
      <h3>Enter Passcode</h3>
      <form>
        <input type="password" value={result} ref={inputRef} />
      </form>

      <div className="keypad">
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>

        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="orange" onClick={handleClick}>
          1
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button className="green" onClick={handleSubmit}>
          <i class="far fa-check-circle"></i>
        </button>
      </div>
      <button className="checkin" onClick={handleCheckIn}>
        Checkin
      </button>
      <button className="checkout" onClick={handleCheckOut}>
        Checkout
      </button>
    </div>
  );
}

export default Passcode;
