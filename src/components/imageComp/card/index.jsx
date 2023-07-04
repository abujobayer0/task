import download from "downloadjs";

const ImageCard = ({ imageUrl, title }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    download(imageUrl);
  };
  return (
    <div className="image-card relative shadow-lg rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        loading="lazy"
        alt="Image"
        className="image-card__image"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <button
          onClick={handleDownload}
          className="image-card__download-button bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg px-4 py-2"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
