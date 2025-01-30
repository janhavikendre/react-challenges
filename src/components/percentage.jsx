import React, { useState } from "react";

 function ProgressBar() {
  const [val, setVal] = useState(0);

  const setValuer = (e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 100) {
      setVal(value);
    } else {
      alert("Please enter a value between 0 and 100");
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto ">
      <h1 className="text-2xl font-bold text-center mb-6">Progress Bar</h1>
      {/* Progress Bar */}
      <div className="flex justify-center items-center mt-4">
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className="absolute h-full text-white text-center font-medium rounded-full"
            style={{
            width: `${val}%`,
            background: `linear-gradient(90deg, rgba(255,0,85,1) 0%, rgba(255,154,0,1) 100%)`,
        
        }}
          >
            {val}%
          </div>
        </div>
      </div>

      {/* Input Form */}
      <form className="mt-4">
        <label htmlFor="percentage" className="block text-lg font-medium mb-2">
          Input Percentage:
        </label>
        <input
          type="number"
          id="percentage"
          value={val}
          onChange={setValuer}
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Enter a number between 0 and 100"
        />
      </form>
    </div>
  );
}

export default ProgressBar;
