// Card.jsx
import React from "react";

const Card = ({ addValue, name, children }) => {
  return (
    <div className="w-72 p-6 rounded-2xl bg-white shadow-lg flex flex-col items-center gap-4">
      <button
        onClick={addValue}
        className="px-6 py-2 rounded-xl bg-blue-500 text-white font-medium 
                   hover:bg-blue-600 active:scale-95 transition-all"
      >
        {name}
      </button>
      <div className="w-full text-center">{children}</div>
    </div>
  );
};

export default Card;
