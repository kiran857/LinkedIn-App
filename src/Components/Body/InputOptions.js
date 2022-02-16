import React from 'react'
import "./FeedOptions.css";
import {BiLike,BiCommentDetail,BiShare,BiSend} from "react-icons/bi";


function InputOptions({Icon,title}) {
  return (
    <div className='feedoptions'>
        {Icon && <Icon className="Iconoptions"/>}
        <h3>{title}</h3>

    </div>
  )
}

export default InputOptions