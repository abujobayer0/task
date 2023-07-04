import { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetData } from "../hooks/getData";
import Swal from "sweetalert2";
const SearchUserPage = () => {
  const { data: datas, loading, refetch } = useGetData(`/employes`);
  const [data, setData] = useState([]);
  const formRef = useRef();
  useEffect(() => {
    if (!loading) {
      setData(datas);
    }
  }, [datas, !loading, loading]);

  const handleDelete = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-2vba.onrender.com/employes/${e}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log(data);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const mobileNo = form.mobileNo.value;
    console.log(form);
    try {
      fetch(
        `https://server-2vba.onrender.com/employes/find?name=${name}&&mobileNo=${mobileNo}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (err) {
      console.log(err);
    }
  };
  const handleClear = () => {
    setData(datas);
    formRef.current.reset();
  };
  console.log(datas);

  return (
    <div className="w-full overflow-hidden  bg-white mx-2">
      <h1 className="px-2 py-5 text-3xl text-black font-semibold   my-2 border-l-4  rounded-  border-purple-400">
        Employee
        <span className="text-sm pl-2 uppercase">-Search </span>
      </h1>

      <div className="bg-white  w-full">
        <div className="w-full flex py-5 font-semibold justify-between px-4 items-center">
          <h2 className="text-lg text-black">Search Employee</h2>
          {!datas ? (
            <h2 className="text-lg text-black">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
                <span>loading...</span>
              </div>
            </h2>
          ) : (
            ""
          )}
          <Link to={"/create"}>
            <button className="px-4 py-2 bg-purple-600 text-white">
              Add Employee
            </button>
          </Link>
        </div>
        <form
          onSubmit={handleSearch}
          ref={formRef}
          className="flex  items-center flex-col md:flex-row mb-5 pb-5 justify-center px-4"
        >
          <div className="w-full md:w-1/3 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              type="text"
              name="name"
            />
          </div>{" "}
          <div className="w-full md:w-1/3 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Mobile No
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              type="text"
              name="mobileNo"
            />
          </div>
          <div className="flex w-full gap-4 md:w-1/3">
            <button
              type="submit"
              className="px-4 py-2 h-fit text-white w-full font-semibold bg-green-500 "
            >
              Search
            </button>
            <span
              onClick={handleClear}
              className="bg-red-500 cursor-pointer text-center text-white w-full font-semibold px-4  h-fit py-2"
            >
              Clear
            </span>
          </div>
        </form>
      </div>

      <div className="overflow-hidden bg-white overflow-x-scroll ">
        <table className="min-w-full divide-y  divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Birth Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-gray-700 min-h-screen text-xs divide-gray-200">
            {!loading &&
              data?.map((item, indx) => (
                <tr key={indx}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.firstName}{" "}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {" "}
                    {item?.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.mobileNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item?.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item?.Gender === "male"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item?.Gender}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {" "}
                    {item?.birthDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {" "}
                    {item?.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"> {item?.city}</td>

                  <td className="px-6 py-4 flex flex-col justify-start items-center gap-2">
                    <Link
                      className="w-full"
                      to={`/update/employee/${item?._id}`}
                    >
                      <button className="px-3 py-2 w-full  flex items-center font-medium text-white bg-purple-600  hover:bg-purple-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                        <AiFillEdit /> Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className=" w-full flex items-center px-3 py-2 font-medium text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                    >
                      <AiFillDelete /> Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchUserPage;
