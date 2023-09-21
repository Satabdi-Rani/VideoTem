import React from 'react';
import { BiMenu, BiSolidVideoPlus} from "react-icons/bi";
import { BsYoutube, BsFillMicFill } from "react-icons/bs";
import {FiSearch, FiBell, FiUser} from "react-icons/fi";



const Header = () => {
    return (
        <div className='mt-6'>
            {/* main */}
            {/* header container */}
            <div className='grid grid-cols-3 mt-6'>
               <div className="w-64 flex flex-row">
                <BiMenu size={30} className='ml-6 '/>
                <BsYoutube size={30} className='ml-3 fill-red-800'/>
                <p className='font-bold ml-2'>YOUTUBE</p>
              </div>

              <div className="flex flex-row mt-1 ml-32 gap-2">
                    <div className='flex flex-row'>
                        <input className='hidden sm:block' type="text" placeholder='Search' />
                        <FiSearch className='text-xl bg-slate-50' />
                    </div>
                    <div className=''>
                        <BsFillMicFill className='text-xl' />
                    </div>
              </div>

              {/* <div className="flex sm:flex-row sm:ml-72 ">
                    <div className='flex flex-row sm:py-2 sm:border-2 sm:rounded-full'>
                        <input className='hidden sm:block hidden sm:border-r sm:pl-4 sm:w-96 sm:h-6' type="text" placeholder='Search' />
                        <FiSearch className='mx-2 bg-slate-50' size={10}/>
                    </div>
                    <div className='sm:border-2 sm:rounded-full sm:w-10 sm:h-10 sm:ml-4 bg-slate-50'>
                    <BsFillMicFill className='sm:m-2 ' size={10}/>
                    </div>
                </div>  */}

                <div className='ml-6 mt-1'>
                        <ul className='flex flex-row gap-5'>
                            <li><BiSolidVideoPlus className='text-2xl '/></li>
                            <li><FiBell className='text-2xl'/></li>
                            <li><FiUser className='text-2xl'/></li>
                        </ul>
                </div>
            </div> 
            {/* main  */}
        </div>
    );
};

export default Header;