const Alerts = () => {
  return (
    <div>
      <div className="flex flex-col mt-10 justify-center gap-4 items-center">
        <span className="bg-green-600 text-lg w-full rounded-sm px-5 py-5  text-white">
          <strong>Success!</strong>Indicates a successfull or positive action
        </span>
        <span className="bg-blue-400 text-lg w-full rounded-sm px-5 py-5  text-white">
          <strong>Info!</strong>Indicates a neutral informative chanege of
          action
        </span>
        <span className="bg-orange-600 text-lg w-full rounded-sm px-5 py-5  text-white">
          <strong>Warning!</strong>
          Indicates a warning that might need attention.
        </span>
        <span className="bg-red-600 text-lg w-full rounded-sm px-5 py-5  text-white">
          <strong>Danger!</strong>
          Indicates a dangerous or potentially negative action
        </span>
      </div>
    </div>
  );
};

export default Alerts;
