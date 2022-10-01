import React from 'react';
import cake from '../assets/images/cake.png';
import Indicator from '../components/Indicator';
function EventPage() {
    return ( 
        <div className='bg-[#FBFAFF] sm:min-h-screen flex-col-reverse  sm:flex-row sm:max-h-screen flex p-16 justify-around w-full'>
           <div className='mt-10'>
            <h1>Birthday Bash</h1>
            <h5 className=''>Hosted by <strong>Elysia</strong></h5>
            <div className='flex-col flex items-start text-sm w-full'>
                <Indicator calendar={true} startTime={'18 August 6:00PM'} endTime={'19 August 1:00PM UTC +10'} />
                <Indicator calendar={false} location={'Suburb, State, Postcode'}/>
            </div>
           </div>
           <div className='w-4/12 mt-10'>
            <img src={cake} className="h-4/6 object-cover" alt="" />
           </div>
        </div>
     );
}

export default EventPage;