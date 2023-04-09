import React from "react";

const Loader = () => {
  return (
    <div>
      <div className=" z-50 fixed w-screen h-screen bg-transparent bg-base-200 flex items-center justify-center">
        <div className=" text-lg  md:text-[50px] ">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
