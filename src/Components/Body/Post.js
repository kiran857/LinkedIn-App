import React,{forwardRef} from 'react';
import { Avatar } from "@material-ui/core";
import "./Post.css"
import InputOptions from "./InputOptions"
import {BiLike,BiCommentDetail,BiShare,BiSend} from "react-icons/bi";



const Post= forwardRef(({name,description,message,photoUrl},ref)=> {
  return <div ref={ref} className='post'>
      <div className='post-header'>
      <Avatar src={photoUrl}>{name[0]}</Avatar>
      <div className="post-info">
      <h2>{name}</h2>
      <p>{description}</p>
     
      </div>
      </div>
        <div className="post-body">
        <p>{message}</p>
      
     </div>
     <div className="post">
                 <div className="reaction-icon">
                 <InputOptions Icon={BiLike} title="Like" />
                 <InputOptions Icon={BiCommentDetail} title="Comment" />
                 <InputOptions Icon={BiShare} title="Share" />
                 <InputOptions Icon={BiSend} title="Send" />
                 
                 </div>
                 </div>
         
      
  </div>;
})

export default Post;