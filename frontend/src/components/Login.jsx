import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/styles";
import { server } from "../server";
import { toast } from "react-toastify";
import { store } from "../redux/store";
import { loadUserStart, loadUserSuccess } from "../redux/reducer/reducer";
function Login() {
  const navigate = useNavigate();
  const notify = (message) => toast(message);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    store.dispatch(loadUserStart());
    axios
      .post(
        `${server}/api/v2/user/login`,
        { email, password },
        { withCredentials: true }
      )
      .then(async (data) => {
        //console.log(data.data);
        await notify("successfully logged in");
        store.dispatch(loadUserSuccess(data.data));

        navigate("/");
        // window.location.reload()
      })
      .catch(async (err) => {
        //console.log(err);
        await notify(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 mb-6 text-center text-3xl font-extrabold text-gray-700">
          Login to your account
        </h2>
        <div className=" mx-auto sm:w-full sm:max-w-md:">
          <div className="bg-white py-8 px-6 shadow rounded sm:rounded-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
              </div>
              <div className={styles.normalFlex}>
                <div className={`${styles.normalFlex} justify-between w-full`}>
                  <div className="flex">
                    <input
                      type="checkbox"
                      name="remember-me"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                      id="remember-me"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:text-blue-500"
                    >
                      Forgot password
                    </a>
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
              <div className={`${styles.normalFlex} w-ful`}>
                <h4>Don't have account</h4>
                <Link to="/signup" className="text-blue-600 pl-2">
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
