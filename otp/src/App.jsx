import { OTP_DIGITS } from "./constants";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const App = () => {
  const [inputVal, setInputVal] = useState(new Array(OTP_DIGITS).fill(""));

  const refArr = useRef([]);

  const handleOnChange = (value, idx) => {
    const newValue = value.trim();
    if (isNaN(newValue)) return alert("Please enter the valid number");

    const newInpVal = [...inputVal];
    newInpVal[idx] = newValue;
    setInputVal(newInpVal);
    newValue && refArr.current[idx + 1]?.focus();
  };

  const handleOnKeyDown = (e, idx) => {
    if (!e.target.value && e.key === "Backspace")
      refArr.current[idx - 1]?.focus();
    if (e.key === "ArrowLeft") refArr.current[idx - 1]?.focus();
  };

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-[#dad7cd] p-10">
      <h1 className="text-8xl text-center font-medium underline text-green-900">
        Validate OTP
      </h1>
      <div className="p-10 text-center">
        {inputVal.map((val, idx) => (
          <input
            ref={(input) => {
              refArr.current[idx] = input;
            }}
            key={idx}
            type="text"
            value={val}
            maxLength={1}
            onKeyDown={(e) => handleOnKeyDown(e, idx)}
            onChange={(e) => handleOnChange(e.target.value, idx)}
            className="w-12 h-12 mx-2 text-center border border-black rounded text-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
``;
