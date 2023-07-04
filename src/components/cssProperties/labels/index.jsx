const Labels = () => {
  return (
    <div className="flex flex col mt-10 gap-4 md:flex-row justify-center">
      <span className="bg-gray-600 text-xs rounded-sm px-1 text-black">
        Default
      </span>
      <span className="bg-blue-600 text-xs rounded-sm px-1 text-white">
        Priamry
      </span>
      <span className="bg-green-600 text-xs rounded-sm px-1 text-white">
        Success
      </span>
      <span className="bg-blue-300 text-xs rounded-sm px-1 text-white">
        Info
      </span>
      <span className="bg-orange-600 text-xs rounded-sm px-1 text-white">
        Warning
      </span>
      <span className="bg-red-600 text-xs rounded-sm px-1 text-white">
        Danger
      </span>
    </div>
  );
};

export default Labels;
