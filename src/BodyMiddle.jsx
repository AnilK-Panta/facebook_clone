import React from "react";
import PostFeed from "./PostFeed";
import BodyMiddleStory from "./BodyMiddleStory";
import "./BodyMiddle.css";
import BodyPost from "./BodyPost";


const BodyMiddle=()=>{
    return(
        <>
        <div className="align_parts">
        <BodyMiddleStory />
        <PostFeed />
        <BodyPost />
        
        </div>
        </>
    )
}
export default BodyMiddle;