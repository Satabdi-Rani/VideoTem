import React from 'react';
import { BiMenu} from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";

const Header = () => {
    return (
        <div className='flex'>
            <div className="burger_menu">
               <BiMenu size={30}/>
               <BsYoutube size={30} />
            </div>
        </div>
    );
};

export default Header;