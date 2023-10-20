import React from 'react';
import {AiFillHome, AiTwotoneVideoCamera} from 'react-icons/ai';
import {MdSubscriptions, MdLocalLibrary} from 'react-icons/md';
// import {HiLibrary} from 'react-icons/hi';

const VideoSection = () => {
    return (
        <div>
          {/* Main Section */}  
          {/* container section */}
          <div className='grid grid-cols-2 w-[95%] mx-auto mt-6'>

            <div className='w-[20%]'>   {/* left side */}
               <div className='flex flex-col gap-4'> {/* left side container */}
                  <div className='flex flex-col gap-1'> {/* Single Div */}
                     <AiFillHome className='text-xl ml-2'></AiFillHome>
                     <h4 className='text-sm font-light'>Home</h4>
                  </div>{/* Single Div */}

                  <div className='flex flex-col gap-1'> {/* Single Div */}
                    <AiTwotoneVideoCamera className='text-xl ml-2'></AiTwotoneVideoCamera>
                     <h4 className='text-sm font-light'>Shorts</h4>
                  </div>{/* Single Div */}

                  <div className='flex flex-col gap-1'> {/* Single Div */}
                    <MdSubscriptions className='text-xl ml-2'></MdSubscriptions>
                     <h4 className='text-sm font-light'>Subscriptions</h4>
                  </div>{/* Single Div */}

                  <div className='flex flex-col gap-1'> {/* Single Div */}
                    <MdLocalLibrary className='text-xl ml-2'></MdLocalLibrary>
                     <h4 className='text-sm font-light'>Library</h4>
                  </div>{/* Single Div */}

               </div> {/* left side container */}
            </div> {/* left side */}
          

            <div className='w-[80%]'>{/* right side */}
             <div className='flex flex-row'> {/* top side */}
                <button className='px-2 py-1 bg-slate-100 rounded'>All</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Mixes</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Game shows</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Live</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Sports</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Foods</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Comedy</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Travel</button>
             </div> {/* top side */}
            
            </div>{/* right side */}
            
            {/* this section will be deleted */}
           
             <div className='flex flex-row'> {/* top side */}
                <button className='px-2 py-1 bg-slate-100 rounded'>All</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Mixes</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Game shows</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Live</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Sports</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Foods</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Comedy</button>
                <button className='px-2 py-1 bg-slate-100 rounded'>Travel</button>
             </div> {/* top side */}
            {/* this section will be deleted */}

            
          </div>
          {/* container section */}
          {/* Main Section */}
        </div>
    );
};

export default VideoSection;