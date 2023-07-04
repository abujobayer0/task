const IFrames = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-3xl my-4 mx-auto text-center w-full">iFrame One </h2>
      <iframe
        src="https://task-82976.web.app/"
        title="Embedded Website"
        width="600"
        height="400"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default IFrames;
