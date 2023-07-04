const ImageLink = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      <a href="#" className="w-20 rounded-full">
        <img
          src="https://magnus.jalatechnologies.com/Content/img/growic-technologies.jpg"
          alt=""
          className="w-full"
        />
      </a>
      <a href="#" className="w-20 rounded-full">
        <img
          src="https://magnus.jalatechnologies.com/Content/img/linkedin.png"
          alt=""
          className="w-full"
        />
      </a>
      <a href="#" className="w-20 rounded-full">
        <img
          src="https://magnus.jalatechnologies.com/Content/img/google-logo.jpg"
          alt=""
          className="w-full"
        />
      </a>
      <a href="#" className="w-20 rounded-full">
        <img
          src="https://magnus.jalatechnologies.com/Content/img/jala-tech-logo.png"
          alt=""
          className="w-full"
        />
      </a>
    </div>
  );
};

export default ImageLink;
