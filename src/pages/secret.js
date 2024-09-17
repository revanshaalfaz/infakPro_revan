import React, { useState } from "react";

const Secret = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center">
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="input1" className="block mb-2 text-sm font-medium text-gray-700">
            Lat
          </label>
          <input
            id="input1"
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-black" // Tambahkan class text-black
          />
        </div>
        <div>
          <label htmlFor="input2" className="block mb-2 text-sm font-medium text-gray-700">
            Long
          </label>
          <input
            id="input2"
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-black" // Tambahkan class text-black
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Secret;
