import React from "react";

const Homebanner = () => {
  return (
    <div className="flex">
      <div className="h-448px  bg-cover bg-center relative bg-gray-700">
        <img
          src="https://image.tmdb.org/t/p/original//hVMoqvXs5j9ffun56tZ5YhliSD9.jpg"
          alt=""
          className="bg-gray-700"
          />
      </div>
      <div className=" h-11.875 ml-1.875 pt-8.75 absolute  left-10 text-white" style={{ top: '76%' }}>
        <h1 className="text-3xl font-bold pb-1">Ginny & Georgia</h1>
        <div className="text-black">

        <button className="bg-white border rounded cursor-pointer font-semibold mr-4 outline-none px-8 py-2">
          Play
        </button>
        <button className="bg-white border  rounded cursor-pointer font-semibold mr-4 outline-none px-8 py-2">
          MyList
        </button>
        </div>
        <p className="text-base h-20 leading-6 max-w-xl pt-4">
          Angsty and awkward fifteen year old Ginny Miller often feels more
          mature than her thirty year old mother, the irresistible and dynamic
          Georgia Miller...
        </p>    
        <div className="absolute bg-gradient-to-t from-transparent via-[rgba(37, 37, 37, 0.61)] to-black h-19 w-full bottom-0" />
      </div>
    </div>
  );
};

export default Homebanner;
