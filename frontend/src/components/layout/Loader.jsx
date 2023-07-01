import React from "react";
import Lottie from "lottie-react";
import loader from "../../assets/animation/24151-ecommerce-animation.json";
function Loader() {
  const option = {
    loop: false,
    autoplay: true,
    animationData: loader,
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Lottie animationData={loader} className="800px:w-[300px] w-[80%]" />
    </div>
  );
}

export default Loader;
