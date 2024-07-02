import React from "react";
import fit1 from "../assets/fit1.png";
import dumbell from "../assets/dumbbell.png";
import fit2 from "../assets/fit2.png";

import workout1 from "../assets/workout1.png";
import workout2 from "../assets/workout2.png";
import banner from "../assets/banner.png";
import Navbar from "../Components/Navbar.jsx";
import { Button } from "../Components/ui/button";

const Landing = () => {
  return (
    <div className="flex flex-col font-mono w-full min-h-screen">
      <Navbar />
      <div className="flex flex-row px-12 flex-1 items-center font-mono">
        <div className="flex flex-1 items-center justify-center ">
          <div className="flex flex-col">
            <h1 className="font-Quicksand text-3xl font-semibold">
              Want to elevate your work out?
              <br />
            </h1>
            <h1 className="text-[#00a3ff] text-3xl font-bold ">
              We are here to provide a One-Stop solution for all your fitness
              related problems!
            </h1>
            <Button className="w-1/6 rounded-full my-8 p-8">Join Now</Button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row pb-8">
            <img src={fit1} alt="fit" className="h-[400px] w-[400px] pb-8" />
            {/* <img src={fit2} alt="fit" className="h-[150px] w-[150px]" /> */}
          </div>
          {/* <div className="flex flex-row pt-8">
          <img src={workout1} alt="fit" className="h-[150px] w-[150px] pb-8" />
          <img src={workout2} alt="fit" className="h-[150px] w-[150px]" />
        </div> */}
        </div>
      </div>
      <div className="relative inset-0 z-0">
        <img
          src={banner}
          className="w-full h-full object-cover  py-8"
          alt="banner"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="flex flex-row">
            <div className="flex px-8">
              <img src={dumbell} alt="dumbel" />
            </div>
            <div className="text-center">
              <h1 className=" text-4xl text-white font-semibold">
                Welcome to Fitness World!
              </h1>
              <p className="mt-4 text-2xl">
                Your journey to a healthier life starts here.
              </p>
            </div>
            <div className="flex px-8">
              <img src={dumbell} alt="dumbel" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Landing;
