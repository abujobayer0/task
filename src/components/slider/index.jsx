import { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <div className="mt-32 max-w-xl mx-auto">
      <label className="text-white dark:text-gray-200">Range</label>
      <input
        id="range"
        type="range"
        defaultValue={0}
        onChange={(e) => setValue(e.target.value)}
        className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-0 dark:focus:border-blue-500 focus:outline-none "
      />
      <h2>Current Slider Value : {value}</h2>
    </div>
  );
};

export default Slider;
