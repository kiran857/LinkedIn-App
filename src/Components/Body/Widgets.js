import React from 'react'
import "./Widgets.css"
import { MdFiberManualRecord } from "react-icons/md"
import {AiFillInfoCircle} from "react-icons/ai"

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets-Article'>
            <div className='widgets-ArticleLeft'>
                <MdFiberManualRecord  className='iconRecord'/>
            </div>
            <div className='widgets-ArticleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
        <div className='widgets-header'>
        <h2>LinkedNews</h2>
        <AiFillInfoCircle className='iconRecord'/>
                </div>
            {newsArticle("React is back !!!!...","Top New -recorded")}
            {newsArticle("most welcome to react study room!!!!...","Top New -recorded")}
            {newsArticle("Hello Firebase project is back !!!!...","Top New -recorded")}
            {newsArticle("hi !!!!...","Top New -recorded")}
            {newsArticle("React is back !!!!...","Top New -recorded")}
            {newsArticle("React is back !!!!...","Top New -recorded")}
            {newsArticle("most welcome to react study room!!!!...","Top New -recorded")}
            {newsArticle("Hello Firebase project is back !!!!...","Top New -recorded")}
            {newsArticle("hi !!!!...","Top New -recorded")}
            {newsArticle("React is back !!!!...","Top New -recorded")}
        
        
        </div>

    )
}
export default Widgets;