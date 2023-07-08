import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../server";

function ActivationPage() {
  const { activationToken } = useParams();
  const [error, setError] = useState(false);
  useEffect(() => {
    if (activationToken) {
      const activationEmail = () => {
        try {
          const response = axios
            .post(`${server}/api/v2/user/activation`, {activationToken:activationToken})
            .then(() => {
              setError(false);
              return response.data.message;
            })
            .catch(() => {
              setError(true);
            });
          //console.logconsole.log(response)
        } catch (error) {
          //console.log(error);
          //console.log(error.response.data.message);
        }
      };
      activationEmail();
    }
  }, [activationToken]);
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      {error ? <p>your token expired</p> : <p>Account successfully created</p>}
    </div>
  );
}

export default ActivationPage;
