import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetData } from "../hooks/getData";
import { usePutData } from "../hooks/useUpdate";
const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, refetch } = useGetData(`/employee/${id}`);
  const { mutate } = usePutData(`/employee/update/${id}`);

  const employee = !loading && data ? data[0] : {};
  const [gender, setGender] = useState("");
  const [otherCity, setOtherCity] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleOtherCity = () => {
    setOtherCity((prev) => !prev);
  };
  const handleSkillChange = (e) => {
    e.preventDefault();
    const selectedSkill = e.target.value;
    const updatedSkills = [...skills];

    if (e.target.checked) {
      updatedSkills.push(selectedSkill);
    } else {
      const index = updatedSkills.indexOf(selectedSkill);
      if (index > -1) {
        updatedSkills.splice(index, 1);
      }
    }
    setSkills(updatedSkills);
  };
  console.log(skills);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const mobileNo = form.mobileNo.value;
    const birthDate = form.birthDate.value;
    const Gender = gender;
    const address = form.address.value;
    const country = form.country.value;
    const city = form.city.value || form.otherCity.value;
    const Skills = skills;

    try {
      mutate(
        {
          firstName,
          lastName,
          email,
          mobileNo,
          birthDate,
          Gender,
          address,
          country,
          city,
          Skills,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            form.reset();
            refetch();
            navigate("/search");
            alert("Successfully updated employee");
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = () => {
    console.log("canceled");
  };
  useEffect(() => {
    setGender(!loading && employee ? employee?.Gender : "");
    setSkills(!loading && employee && employee?.Skills);
  }, [employee, !loading]);

  return (
    <div className="w-full mr-2">
      <h1 className="px-2 py-5 text-3xl text-black font-semibold  ml-2 my-2 border-l-4  rounded-  border-purple-400">
        Employee
        <span className="text-sm pl-2 uppercase">-Update </span>
      </h1>
      <section className="pt-10 min-h-screen mx-2 md:mx-0 md:ml-2  pb-8 overflow-hidden bg-white sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8  w-full ">
          <form onSubmit={handleSubmit} className="w-full min-h-screen ">
            <div className="flex flex-wrap w-full flex-grow -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="firstName"
                  type="text"
                  defaultValue={employee?.firstName}
                  required
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="lastName"
                  defaultValue={employee?.lastName}
                  type="text"
                  required
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="email"
                  defaultValue={employee?.email}
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Mobile No
                </label>
                <input
                  className="appearance-none   block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="mobileNo"
                  defaultValue={employee?.mobileNo}
                  type="text"
                />
              </div>{" "}
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Date of Birth
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="birthDate"
                  defaultValue={employee?.birthDate}
                  required
                  type="date"
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Gender
                </label>
                <div
                  className="
                flex gap-4"
                >
                  <div className="flex items-center gap-2 text-gray-500">
                    <input
                      type="radio"
                      id="male"
                      className="form-radio text-lg  text-blue-500"
                      name="gender"
                      value="male"
                      checked={!loading && gender && gender === "male"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="male" className="ml-2 text-black">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <input
                      type="radio"
                      id="female"
                      className="form-radio text-pink-500"
                      name="gender"
                      value="female"
                      checked={!loading && gender && gender === "female"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="female" className="ml-2 text-black">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Address
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="address"
                  type="text"
                  defaultValue={employee?.address}
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Country
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="country"
                    defaultValue={employee?.country || "Select"}
                  >
                    <option>Bangladesh</option>
                    <option>Canada</option>
                    <option>China</option>
                    <option>France</option>
                    <option>India</option>
                    <option>Japan</option>
                    <option>Nepal</option>
                    <option>Sri Lanka</option>
                    <option>UK</option>
                    <option>USA</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              {otherCity ? (
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    Other City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="otherCity"
                    type="text"
                    placeholder="Other City"
                  />
                </div>
              ) : (
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    City
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="city"
                      defaultValue={employee?.city || ""}
                    >
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Toronto</option>
                      <option>Vancouver</option>
                      <option>Beijing</option>
                      <option>Shanghai</option>
                      <option>Paris</option>
                      <option>Marseille</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Tokyo</option>
                      <option>Osaka</option>
                      <option>Kathmandu</option>
                      <option>Pokhara</option>
                      <option>Colombo</option>
                      <option>Kandy</option>
                      <option>London</option>
                      <option>Manchester</option>
                      <option>New York</option>
                      <option>Los Angeles</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              <label className="flex items-center gap-2 text-gray-500">
                <input
                  type="checkbox"
                  value="DevOps"
                  checked={otherCity}
                  onChange={handleOtherCity}
                />
                Other City
              </label>

              <div className="text-black tracking-wide text-sm px-2  font-bold w-full">
                <h1 className="text-3xl px-3 font-semibold text-gray-500 py-5 border-b-2 border-gray-200">
                  Skills
                </h1>
                <div className="flex mt-5 flex-col md:flex-row gap-2">
                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      value="AWS"
                      checked={skills?.includes("AWS")}
                      onChange={handleSkillChange}
                    />
                    AWS
                  </label>
                  <br />
                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      value="DevOps"
                      checked={skills?.includes("DevOps")}
                      onChange={handleSkillChange}
                    />
                    DevOps
                  </label>
                  <br />
                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      value="Full Stack Developer"
                      checked={skills?.includes("Full Stack Developer")}
                      onChange={handleSkillChange}
                    />
                    Full Stack Developer
                  </label>
                  <br />
                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      value="Middleware"
                      checked={skills?.includes("Middleware")}
                      onChange={handleSkillChange}
                    />
                    Middleware
                  </label>
                  <br />
                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      value="QA-Automation"
                      checked={skills?.includes("QA-Automation")}
                      onChange={handleSkillChange}
                    />
                    QA-Automation
                  </label>
                  <br />
                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      value="WebServices"
                      checked={skills?.includes("WebServices")}
                      onChange={handleSkillChange}
                    />
                    WebServices
                  </label>
                  <br />
                </div>
              </div>
            </div>
            <div className="w-full justify-end items-center flex gap-4">
              <button
                type="submit"
                className="px-4 py-2 rounded bg-green-500 text-white"
              >
                Update
              </button>
              <Link to={"/search"}>
                <span
                  onClick={handleCancel}
                  className="px-4 cursor-pointer rounded py-2 bg-red-500 text-white"
                >
                  Cancel
                </span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateEmployee;
