const ProgressBars = () => {
  return (
    <>
      <div className="w-full">
        <div className="shadow w-full bg-grey-light">
          <div
            className="bg-green-500 text-xs leading-none py-1 text-center text-white"
            style={{ width: "45%" }}
          >
            45%
          </div>
        </div>

        <div className="shadow w-full bg-grey-light mt-2">
          <div
            className="bg-blue-400 text-xs leading-none py-1 text-center text-white"
            style={{ width: "55%" }}
          >
            55%
          </div>
        </div>

        <div className="shadow w-full bg-grey-light mt-2">
          <div
            className="bg-orange-500 text-xs leading-none py-1 text-center text-white"
            style={{ width: "65%" }}
          >
            65%
          </div>
        </div>

        <div className="shadow w-full bg-grey-light mt-2">
          <div
            className="bg-red-500 text-xs leading-none py-1 text-center text-white"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBars;
