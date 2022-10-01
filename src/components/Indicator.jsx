import React from 'react';
import {BsChevronRight,BsCalendarDay} from 'react-icons/bs';
import {MdOutlineLocationOn} from 'react-icons/md';
function Indicator({startTime,endTime,place,calendar,location}) {
    return ( 
        <div className='flex w-11/12 justify-around font-bold p-1 m-2'>
            <div className='border p-2 rounded-md  shadow-md'>{calendar  ? <BsCalendarDay className='text-blue-600 text-xl' />: <MdOutlineLocationOn className='text-blue-600 text-xl'/>}</div>
           {calendar && <div className='flex flex-col'>
                <p className='text-[#240D57]'>{startTime} <strong className='font-bold '>to</strong></p>
              
                <p className='text-gray-500 font-[600]'>{endTime}</p>
            </div>}
            {!calendar && <div>
                <p>Street name</p>
                <p className='text-gray-500 font-[400]'>{location}</p>
            </div>}
            <div>
            <BsChevronRight />
            </div>
        </div>
     );
}

export default Indicator;