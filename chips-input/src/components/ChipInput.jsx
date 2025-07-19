import React, { useState } from "react";

const ChipInput = ({ chips, addChip, removeChip }) => {
  const [inputText, setInputText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText !== "") {
      e.preventDefault();
      addChip(inputText.trim());
      setInputText("");
    }
  };

  return (
    <div className="text-center">
      <input
        value={inputText}
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
        className="px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-80 text-lg"
      />
      <div className="flex justify-center items-center gap-2">
        {!chips.length ? (
          <h1 className="mt-2 text-2xl text-gray-600">Nothing To Show !!</h1>
        ) : (
          chips.map((chip, i) => (
            <div
              key={i}
              className="flex justify-center items-center gap-4 mt-4 bg-orange-500 text-white rounded-full px-4 py-1"
            >
              <h1 className="">{chip}</h1>
              <button
                onClick={() => removeChip(i)}
                className="cursor-pointer hover:scale-110 hover:text-red-600"
              >
                x
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChipInput;
