import React from "react";
import "./PostFeed.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const PostFeed=()=>{
    return(
        <div className="content_feed">
            <div className="search_sec">
                <div className="profile_pic">
                    <img src="/Images/myphoto.png" className="profile_pic_img" />
                </div>
                <input type="text" placeholder="What's on your mind, Anil" className="feed_input" />
            </div>
            <hr></hr>
            <div className="file_select">
                <div className="live_part">
                    <VideocamIcon className="icon_style1" />
                    <p>Live Video</p>

                </div>
                <div className="live_part">
                    <PhotoLibraryIcon className="icon_style2" />
                    <p>Photo/Video</p>

                </div>
                <div className="live_part">
                    <InsertEmoticonIcon className="icon_style3" />
                    <p>Feeling/Activity</p>

                </div>

            </div>
        </div>
    )
}
export default PostFeed;