const Tooltip = () => {
  return (
    <div className="relative w-fit mx-auto mt-32 flex flex-col items-center group">
      <button className="bg-purple-500 px-3 py-1 text-white">
        Check the tooltip before you click
      </button>
      <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
        <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
          Thank you for being here.
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
