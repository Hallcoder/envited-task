import { TextField } from "@mui/material";
import React, { useState } from "react";
import {AiOutlineCamera} from 'react-icons/ai';
import {MdEdit} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
function CreateEvent() {
  const [image, setimage] = useState();
  const setImage = (e) => {
    let file = e.target.files[0];
    const reader  = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setimage(reader.result); 
    }
  };
  return <div className="bg-gradient-to-r from-[#F6F2FF] to-[#FBFAFF]  flex max-h-screen min-h-screen">
    <form className="w-4/12 border shadow-xl h-[75vh] flex flex-col  rounded-md mr-auto ml-auto mt-[10vh]">
       <h2 className="text-center text-4xl font-bold">Event Details</h2> 
       <div className="flex flex-col items-center justify-around h-5/6">
       <div
        id="image"
        style={{ backgroundImage: `url(${image})` }}
        className="rounded-full w-4/12 bg-cover  bg-no-repeat items-center  flex justify-center h-2/6 bg-gray-200 text-white"
      >
     {/* {!image && <AiOutlineCamera className="text-4xl"/>}    */}
        <label htmlFor="profileImage">
          <AiOutlineCamera  className="text-4xl"/>
        </label>
        <input
          type="file"
          name="file"
          id="profileImage"
          onChange={(e)=>setImage(e)}
          className="hidden"
        />
      </div>
           <TextField label='Event Name' type={'text'} variant={'standard'} className="w-9/12 m-4"/>
           <TextField label='Host Name' type={'text'}  variant={'standard'} className="w-9/12 m-4"/>
           <TextField label="Start Time" type={'time'} variant={'standard'} className="w-9/12 m-4"/>
           <TextField label="End Time" type={'time'} variant={'standard'} className="w-9/12 m-4"/>
           <TextField label="Location" type={'text'} variant={'standard'} className="w-9/12 m-4"/>
           <NavLink to='/event' className={'w-4/12'}><button className="bg-gradient-to-r  mt-8 font-semibold from-[#8456EC] to-[#E87BF8] text-white w-full h-10 rounded-md">Next</button></NavLink>
       </div>
    </form>
  </div>;
}

export default CreateEvent;
