import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useGetData } from "../../hooks/getData";
import ImageCard from "./card";
import Swal from "sweetalert2";

const ImgComp = () => {
  const imgRef = useRef();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const { data, loading, refetch } = useGetData("/images");
  const [allImg, setAllImg] = useState([]);
  const [uload, setUload] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      setAllImg(data);
      setUload(false);
    }
  }, [data, loading, uload, name, image]);
  useEffect(() => {
    fetch("https://server-2vba.onrender.com/images")
      .then((res) => res.json())
      .then((data) => setAllImg(data));
  }, [uload, name, image]);
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setFile(file);
    try {
      setUploadLoading(true);
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=0d200b11c667f2edb8821fb4524ef2f6",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImage(response?.data?.data?.url);
      const file = imgRef.current.files[0];
      const fileName = file ? file.name : "";
      setName(fileName);
      setUploadLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleUpload = () => {
    const img = image;
    if (!name) {
      alert("please select an title");
      return;
    }
    if (!file) {
      alert("please select an image");
      return;
    }
    if (!img) {
      alert("please select an image");
      return;
    }
    try {
      setUploadLoading(true);
      fetch("https://server-2vba.onrender.com/upload/images", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ img, name }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setName("");
      setImage("");
      imgRef.current.value = null;
      setUploadLoading(false);
      setUload(true);
      Swal.fire("Successfully added image!");
    } catch (err) {
      console.log(err);
    } finally {
      refetch();
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-4 flex-col md:flex-row items-center">
        <div className="bg-gray-200 shadow-sm px-2 py-2 rounded">
          <input
            type="file"
            accept="image/*"
            name="image"
            ref={imgRef}
            className="text-xs  focus:outline-0 focus:border-0"
            onChange={handleFileUpload}
          />
        </div>

        <div className="bg-gray-200 shadow-sm py-1 px-2 rounded">
          <label htmlFor="name">
            <span className="text-sm text-purple-600">name</span>
            <input
              type="text"
              onChange={(e) => handleName(e)}
              name="name"
              defaultValue={name}
              className="text-xs bg-gray-200 focus:outline-0 focus:border-0 border-0 "
            />
          </label>
        </div>
        <button
          onClick={handleUpload}
          disabled={uploadLoading}
          className="bg-purple-500 px-4 py-2 rounded text-white"
        >
          {uploadLoading ? "Loading" : "Upload"}
        </button>
      </div>

      <div>
        <h1 className="text-3xl font-semibold text-gray-700">List Of Images</h1>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit justify-items-center relative  auto-rows-[minmax(100px,auto)]  gap-4 ">
        {allImg?.map((img, index) => (
          <ImageCard key={index} imageUrl={img.img} title={img.name} />
        ))}
      </div>
    </div>
  );
};

export default ImgComp;
