import React from "react";
import { NavLink } from "react-router-dom";
import landingPageImage from "../assets/images/Landing page image.svg";
function LandingPage() {
  return (
    <div className="border bg-[#F6F2FF] flex sm:justify-center flex-col-reverse grid-rows-2 grid-cols-4 sm:flex-row  sm:items-center  sm:max-h-screen min-h-fit sm:p-32">
      <div className="sm:w-5/12 flex justify-center m-2 col-span-2 row-span-2 col-start-1 col-end-2">
        <img className="h-[85vh]" src={landingPageImage}></img>
      </div>
      <div className="sm:w-[83vh] min-h-fit sm:items-end sm:flex sm:flex-col col-span-2 row-span-1 row-start-1 row-end-2 col-start-2 col-end-4">
        <h1 className="text-[4rem] w-8/12 sm:m-2 leading-tight font-semibold text-center m-auto sm:text-right">
          Imagine if <strong className="text-[#8456EC] text-gradient-to-r from-[#8456EC] to-[#E87BF8]">SnapChat</strong> had
          events.
        </h1>
        <p className="text-[24px] sm:m-2 w-9/12 text-center m-auto sm:text-end font-[300]">
          Easily host and share events with your friends across any social media
        </p>
        <NavLink to='/create' className={'sm:w-4/12 flex justify-center m-2 w-full'}>
            <button className="bg-gradient-to-r sm:mt-8 font-semibold from-[#8456EC] to-[#E87BF8] text-white w-5/12 m-auto sm:w-full h-10 rounded-md">
              🎉Create my event
            </button>
        </NavLink>
      </div>
      <div className="col-span-2 row-span-1 col-start-2 col-end-4 row-start-2 row-end-auto">
      
      </div>
    </div>
  );
}

export default LandingPage;
