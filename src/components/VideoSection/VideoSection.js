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

            <div className=''>   {/* left side */}
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
          

            <div>{/* right side */}
            
            </div>{/* right side */}
            

            
          </div>
          {/* container section */}
          {/* Main Section */}
        </div>
    );
};

export default VideoSection;