import { useState } from "react";
import ChipInput from "./components/ChipInput";

const App = () => {
  const [chips, setChips] = useState([]);

  const addChip = (chip) => {
    if (!chip) return alert("Please Type Something !!"); // Central validation
    setChips((prev) => [...prev, chip]);
  };

  const removeChip = (i) => {
    setChips((prev) => prev.filter((_, index) => index !== i));
  };

  return (
    <div className="min-h-screen bg-blue-200">
      <div className="p-10 text-center text-7xl font-mono ">Chips Input</div>
      <ChipInput chips={chips} addChip={addChip} removeChip={removeChip} />
    </div>
  );
};

export default App;
