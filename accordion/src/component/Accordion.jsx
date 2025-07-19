import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-8 w-full max-w-md mx-auto flex flex-col gap-2 border-[1px] p-4 border-gray-300 bg-gray-50 shadow-md rounded-md">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden border border-gray-300 rounded-md"
        >
          <button
            onClick={() => toggleOpen(index)}
            className="w-full text-left px-4 py-3 bg-gray-300 hover:bg-amber-100 font-semibold text-gray-800 transition duration-200 flex justify-between items-center"
          >
            {item.title}
            {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
