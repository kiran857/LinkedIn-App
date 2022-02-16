import "./Feed.css"
import React, { useEffect, useState } from 'react';
import Post from "./Post"
import { GrEdit } from "react-icons/gr"
import FeedOptions from "./FeedOptions";
import {FcStackOfPhotos,FcVideoCall} from "react-icons/fc"
import {MdOutlineEventNote} from "react-icons/md";
import {GrArticle} from "react-icons/gr";
import db from "../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
import FlipMove from 'react-flip-move';


function Feed() {
    const user=useSelector(selectUser);
    const[input,setInput]=useState();
   const [posts,setPost]=useState([]);
  
    useEffect(()=>{
        db.db.collection("post")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot)=>setPost(snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data(),

        }))
        ))
    },[]);

    
    
const sendPost=(e)=>{
        e.preventDefault();
        db.db.collection("post").add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoUrl || " ",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
            setInput("")
    };
    return <div className='feed'>
        <div className='feed-inputContainer'>
            <div className='feed-input'>
                <GrEdit />
                <form>
                    <input type="text" 
                    value={input}
                     onChange={(e)=>setInput(e.target.value)} />
                    <button onClick={sendPost} type='submit'></button>
                </form>
            </div>
            <div className="AllfeedOptions">
            <FeedOptions Icon={FcStackOfPhotos} title="Photo" />
            <FeedOptions Icon={FcVideoCall} title="Video" />
            <FeedOptions Icon={MdOutlineEventNote} title="Event" />
            <FeedOptions Icon={GrArticle} title=" Write Article" />
           
            </div>
           </div>
           {/* Post */}
           <FlipMove>        
              {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </FlipMove>

                 </div>;

}

export default Feed;
