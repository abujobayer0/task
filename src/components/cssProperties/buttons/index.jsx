const CssButtons = () => {
  return (
    <div className="flex flex col mt-10 gap-4 md:flex-row justify-center">
      <button className="bg-gray-600 text-lg  rounded-sm px-4 py-2  text-black">
        Default
      </button>
      <button className="bg-blue-600 text-lg  rounded-sm px-4 py-2  text-white">
        Priamry
      </button>
      <button className="bg-green-600 text-lg  rounded-sm px-4 py-2  text-white">
        Success
      </button>

      <button className="bg-orange-600 text-lg  rounded-sm px-4 py-2  text-white">
        Warning
      </button>
      <button className="bg-red-600 text-lg  rounded-sm px-4 py-2  text-white">
        Danger
      </button>
    </div>
  );
};

export default CssButtons;
