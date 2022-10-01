import { TextField } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
function CreateEvent() {
// state to track the image
  const [image, setimage] = useState();
  const [stateData, setData] = useState({
    eName: "",
    hName: "",
    location: "",
    startTime: "",
    endTime: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    const stateD = { ...stateData };
    stateD[input.name] = input.value;
    setData(stateD);
  };

  const setImage = e => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimage(reader.result);
    };
  };
  return (
    <div className="bg-gradient-to-r from-[#F6F2FF] to-[#FBFAFF]  flex max-h-screen min-h-screen">
      <form className="w-4/12 border shadow-xl h-[75vh] flex flex-col  rounded-md mr-auto ml-auto mt-[10vh]">
        <h2 className="text-center text-4xl font-bold">Event Details</h2>
        <div className="flex flex-col items-center justify-around h-5/6">
            {/* div responsible to collect the image using inputfile image */}
          <div
            id="image"
            style={{ backgroundImage: `url(${image})` }}
            className="rounded-full w-4/12 bg-cover  bg-no-repeat items-center  flex justify-center h-2/6 bg-gray-200 text-white"
          >
            <label htmlFor="profileImage">
              <AiOutlineCamera className="text-4xl" />
            </label>
            <input
              type="file"
              name="file"
              id="profileImage"
              onChange={e => setImage(e)}
              className="hidden"
            />
          </div>
          <TextField
            label="Event Name"
            name="eName"
            onChange={handleChange}
            value={stateData.eName}
            type={"text"}
            variant={"standard"}
            className="w-9/12 m-4"
          />
          <TextField
            label="Host Name"
            type={"text"}
            onChange={handleChange}
            name="hName"
            value={stateData.hName}
            variant={"standard"}
            className="w-9/12 m-4"
          />
          <div className="flex">
              <TextField
                label="Start Date"
            onChange={handleChange}
                type={"date"}
                name="startDate"
                value={stateData.startDate}
                variant={"standard"}
                className="w-9/12 m-4"
              />
              &nbsp;
              &nbsp;
              <TextField
                label="Time"
                type={"time"}
            onChange={handleChange}
                name="startTime"
                value={stateData.startTime}
                variant={"standard"}
                className="w-9/12 m-4"
              />
          </div>
          <div className="flex">
              <TextField
                label="End Date"
                type={"date"}
            onChange={handleChange}
                name="endDate"
                value={stateData.endDate}
                variant={"standard"}
                className="w-9/12"
              />
               &nbsp;
              &nbsp;
              <TextField
                label="End Time"
                type={"time"}
                name="endTime"
            onChange={handleChange}
                value={stateData.endTime}
                variant={"standard"}
                className="w-9/12 m-4"
              />
          </div>
          <TextField
            label="Location"
            type={"text"}
            onChange={handleChange}
            name="location"
            value={stateData.location}
            variant={"standard"}
            className="w-9/12 m-4"
          />
          {/* Navigate to the next page */}
          <NavLink to="/event" className={"w-4/12"}>
            <button className="bg-gradient-to-r  mt-8 font-semibold from-[#8456EC] to-[#E87BF8] text-white w-full h-10 rounded-md">
              Next
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
