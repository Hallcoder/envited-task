import React from "react";
import { NavLink } from "react-router-dom";
import landingPageImage from "../assets/images/Landing page image.svg";
function LandingPage() {
  return (
    <div className="border bg-[#F6F2FF] flex sm:justify-center grid-rows-2 grid-cols-4 sm:flex-row  sm:items-center  sm:max-h-screen min-h-fit sm:p-32">
      <div className="sm:w-5/12 col-span-2 row-span-2 col-start-1 col-end-2">
        <img className="h-[85vh]" src={landingPageImage}></img>
      </div>
      <div className="sm:w-[83vh] min-h-fit sm:items-end sm:flex sm:flex-col col-span-2 row-span-1 row-start-1 row-end-2 col-start-2 col-end-4">
        <h1 className="text-[4rem] w-8/12 m-2 leading-tight font-semibold text-right">
          Imagine if <strong className="text-[#8456EC] text-gradient-to-r from-[#8456EC] to-[#E87BF8]">SnapChat</strong> had
          events.
        </h1>
        <p className="text-[24px] m-2 w-9/12 text-end font-[300]">
          Easily host and share events with your friends across any social media
        </p>
      </div>
      <div className="col-span-2 row-span-1 col-start-2 col-end-4 row-start-2 row-end-auto">
      <NavLink to='/create' className={'w-4/12'}>
            <button className="bg-gradient-to-r mt-8 font-semibold from-[#8456EC] to-[#E87BF8] text-white w-full h-10 rounded-md">
              🎉Create my event
            </button>
        </NavLink>
      </div>
    </div>
  );
}

export default LandingPage;
