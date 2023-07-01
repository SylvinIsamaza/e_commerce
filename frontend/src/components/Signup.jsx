import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../server";
import styles from "../styles/styles";
import { toast } from "react-toastify";
function Signup() {
  const notify = (message) => toast(message);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  function handleFIleInputChange(e) {
    const file = e.target.files[0];
    file && setAvatar(file);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const newForm = new FormData();
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("file", avatar);
    newForm.append("password", password);
    axios
      .post(`${server}/api/v2/user/create_user`, newForm, config)
      .then((response) => {
        notify(response.data.message);
        navigate("/");
      })
      .catch((err) => notify(err));
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 mb-6 text-center text-3xl font-extrabold text-gray-700">
          Register as new user
        </h2>
        <div className=" mx-auto sm:w-full sm:max-w-md:">
          <div className="bg-white py-8 px-6 shadow rounded sm:rounded-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    className="px-3 w-full appearance-none border border-gray-300 rounded py-2 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="px-3 w-full appearance-none border border-gray-300 rounded py-2 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
              </div>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  className="px-3 w-full appearance-none border border-gray-300 rounded py-2 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />{" "}
                {visible ? (
                  <AiOutlineEye
                    className="absolute top-2 right-2"
                    size={25}
                    onClick={() => {
                      setVisible(false);
                    }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute top-2 right-2"
                    size={25}
                    onClick={() => {
                      setVisible(true);
                    }}
                  />
                )}{" "}
              </div>
              <div className={styles.normalFlex}>
                <div className={`${styles.normalFlex} justify-between w-full`}>
                  <div className="flex items-center">
                    <label htmlFor="img">
                      {avatar !== "" ? (
                        <img
                          src={URL.createObjectURL(avatar)}
                          alt="profile"
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <RxAvatar className="h-8 w-8"></RxAvatar>
                      )}{" "}
                    </label>
                    <input
                      type="file"
                      name="img"
                      className="hidden"
                      id="img"
                      onChange={handleFIleInputChange}
                      accept=".jpeg,.jpg,.png"
                    />
                    <label htmlFor="img">
                      <span className=" overflow-hidden py-2  px-5 border border-gray-300 shadow-sm mx-2 rounded-md font-medium text-gray-950 ">
                        Upload a file
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.normalFlex}>
                <button
                  type="submit"
                  className="group mx-2 my-2 bg-blue-500 hover:bg-blue-600 flex w-full h-[40px] text-center items-center justify-center text-white rounded"
                >
                  Submit
                </button>
              </div>
              <div className={`${styles.normalFlex} w-full`}>
                <h4>Already have account</h4>
                <Link to="/login" className="text-blue-600 pl-2">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
