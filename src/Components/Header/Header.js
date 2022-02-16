import React from 'react'
import "./header.css";
import { FiSearch } from 'react-icons/fi';
import HeaderOption from './HeaderOption';
import { BiHome } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { MdAddBox} from "react-icons/md";
import {IoMdNotificationsOutline} from "react-icons/io";
import {RiHandbagFill} from "react-icons/ri";
import auth from "../firebase"
import {useDispatch} from "react-redux"
import {logout} from "../features/UserSlice"

function Header() {
       const dispatch=useDispatch();
 
    const logoutToApp=()=>{
        dispatch(logout())
        auth.auth.signOut();
        
    }
    return (
        <div className='header'>
            <div className='navbar'>
             <div className='header-left'>
            <img
                src='https://th.bing.com/th/id/OIP.b5oDvUVU5UVN4cefTJGq3wHaHa?pid=ImgDet&rs=1'
            />
             <div className='header_search'>
             <FiSearch />
             <input type="text"  /> 
     </div>
             
             <div className='header-right'>
             <HeaderOption Icon={BiHome} title="Home"/>
             <HeaderOption Icon={IoMdPeople} title="My Network"/>
             <HeaderOption Icon={MdAddBox} title="Post"/>
             <HeaderOption Icon={IoMdNotificationsOutline} title="Notification"/>
             <HeaderOption Icon={RiHandbagFill} title="Jobs"/>
             <HeaderOption
                avatar={true}
                title={"Me"}
                  onClick={logoutToApp}
              />
             
                     </div>
             </div>
            </div>
        </div>
    )
}

export default Header
