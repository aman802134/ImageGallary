import React, { useState, useRef } from "react";
import image from '/images/DashboardProfile.avif'
const Uploader = () => {
  return (
    <>
      <div className="w-[856px] h-[400px] border-2 border-dashed border-green rounded-xl uploader_grid  ">
        <div className=" w-full h-full flex flex-col justify-between items-start ">
          <div className="w-full h-full justify-start items-start">
            <form action="" className="flex flex-col space-y-5 py-3 px-1">
              <input
                type="text"
                name="photoTitle"
                id="photoTitle"
                placeholder="Give a title about image"
                className="w-w-full py-3 px-2 outline-none border-[1px] border-green rounded-md bg-greenShade  font-roboto font-normal text-base"
              />
              <textarea
                name="description"
                id="description"
                cols="5"
                rows="4"
                placeholder="Give some description about this image"
                className="w-full outline-none border-[1px] border-green rounded-md bg-greenShade py-2 px-2  font-roboto font-normal text-base"
              ></textarea>
            </form>
          </div>
          <div className="w-[410px] h-[180px] border-2 border-dashed border-green rounded-md bg-greenShade flex flex-col justify-center items-center ">
            <input
              type="file"
              name="imageUpload"
              id="uploader"
              accept="image/*"
              hidden
            />
            <div className="w-full space-x-4 flex justify-center items-center">
              <button className="py-2 px-3 w-44 bg-green rounded-3xl text-white font-roboto font-normal text-lg shadow-2xl hover:shadow-md hover:bg-darkGreen transition-all">
                Brows files
              </button>
              <button className="py-2 px-3 w-44 bg-green rounded-3xl text-white font-roboto font-normal text-lg shadow-2xl hover:shadow-md hover:bg-darkGreen transition-all">
                Upload image
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-xl overflow-hidden px-1 py-1">
          <img src={image} alt=""  className="w-full h-full bg-center bg-cover overflow-hidden rounded-xl"/>
        </div>
      </div>
    </>
  );
};

export default Uploader;
