import React from 'react';
import "./header.css";
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux"
import {selectUser} from "../features/UserSlice"


function HeaderOption({Icon,title,avatar,onClick}) {
  const user=useSelector(selectUser);
    
  return <div onClick={onClick} className='headerOptions'>
        {Icon && <Icon  className="headerOptionIcon"/>}
      {avatar &&(
<Avatar className="headerOptionIcon" >{user?.email[0]} </Avatar>)}
      <h3>{title}</h3>
      
  </div>;
}
export default HeaderOption;