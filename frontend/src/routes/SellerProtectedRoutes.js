import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../components/layout/Loader";

const ShopProtectedRoute = ({ children }) => {
  const { seller, isSeller, isLoading } = useSelector((state) => state.seller);

  const navigate = useNavigate();
  useEffect(() => {
    function checkUser() {
      if (isLoading === false) {
        if (isSeller === false) {
          return navigate("/");
        }
      } else {
        return <Loader />;
      }
    }
    checkUser();
  }, [isLoading, isSeller, navigate]);
  return children;
};
export default ShopProtectedRoute;
