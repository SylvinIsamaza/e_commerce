import axios from "axios";
import React, { useEffect } from "react";
import { server } from "../../../server";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${server}/api/v2/user/logout`, { withCredentials: true })
      .then(() => {
        toast("Logout successfully");
        navigate("/login");
        window.location.reload();
      })
      .catch((err) => {
        toast("logout failed");
        //console.log(err);
      });
  }, []);
}

export default Logout;
