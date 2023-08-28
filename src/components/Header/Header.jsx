import React from 'react';
import { BiMenu, BiSolidVideoPlus} from "react-icons/bi";
import { BsYoutube, BsFillMicFill } from "react-icons/bs";
import {FiSearch} from "react-icons/fi";



const Header = () => {
    return (
        <div className='flex flex-row mt-6'>
            <div className="burger_menu flex-initial w-64 flex flex-row">
               <BiMenu size={30} className='ml-6 '/>
               <BsYoutube size={30} className='ml-3 fill-red-800'/>
               <p className='font-bold ml-2'>YOUTUBE</p>
            </div>
            <div className="search_option flex flex-row ml-72 ">
                <div className='flex flex-row py-2 border-2 rounded-full'>
                    <input className='border-r pl-4 w-96 h-6' type="text" placeholder='Search' />
                    <FiSearch className='mx-2 bg-slate-50' size={20}/>
                </div>
                <div className='border-2 rounded-full w-10 h-10 ml-4 bg-slate-50'>
                <BsFillMicFill className='m-2 ' size={20}/>
                </div>
                <div className='flex justify-end'>
                    <ul>
                        <li>
                            <BiSolidVideoPlus />
                        </li>
                        <li>
                           
                        </li>
                        <li></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Header;