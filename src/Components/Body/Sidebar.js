import React from 'react';
import { Avatar } from "@material-ui/core";
import "./Sidebar.css"
import {selectUser} from "../features/UserSlice"
import {useSelector} from "react-redux"


function Sidebar() {
    const user=useSelector(selectUser);
    const recentItem=(topic)=>(
        <div className='sidebar-recentItem'>
        <span className='sidebar-hash'>#</span>
        <p>{topic}</p>

        </div>
    );

    return (
    <div className='sidebar'>
        <div className='sidebar-top'>
        <div className="profileUser">
            <img src='https://wallup.net/wp-content/uploads/2019/10/650056-fields-trees-plants-sunrise-nature-fog-countryside-sky-clouds-earth-agriculture-1.jpg'
             alt='' />
            <Avatar src={user.photoUrl} className="sidebar-avatar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
            </div>
            <div className='sidebar-status'>
                <div className='sidebar-stat'>
                    <p>Who View you</p>
                    <p className='sidebar-statNumber'>1231</p>
                </div>

                <div className='sidebar-stat'>
                    <p>Views on Post</p>
                    <p className='sidebar-statNumber'>1231</p>
                </div>
            </div>
            <div className='sidebar-bottom'>
            <p>Recent</p>
            {recentItem("ReactJs")}
            {recentItem("Javascript")}
            {recentItem("Firebase")}
            {recentItem("Nodejs")}
            {recentItem("MUI")}
           
            </div>
        
            </div>
           

    </div>
    );
}

export default Sidebar;
