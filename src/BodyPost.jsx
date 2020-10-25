import React from "react";
import "./PostFeed"
import "./BodyPost.css"
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareIcon from '@material-ui/icons/Share';

const BodyPost=()=>{
    return(
        <>
        <div className="post_box">
            <div className="post_profil">
                <div className="profile_pic">
                    <img src="/Images/myphoto.png" className="profile_pic_img" />
                </div>
                <div className="name_part">
                    <h5>Anil K. Panta</h5>
                    <p>2 days. </p>
                </div>
            </div>
            <div className="post_caption">
                    <p>Whats up learners :)</p>
            </div>
            <div className="post_image">
                <img src="/Images/myphoto.png" alt="lolendra" className="post_image_style" />
            </div>
            <hr className="hr_up"/>
            <div className="post_react">
                <div className="like">
                    <ThumbUpOutlinedIcon className="like_icons"/>
                    <p>Like</p>
                </div>
                <div className="like">
                    <ChatBubbleOutlineOutlinedIcon className="like_icons"/>
                    <p>Comment</p>
                </div>
                <div className="like">
                    <ShareIcon className="like_icons"/>
                    <p>Share</p>
                </div>
            </div>
            <hr className="hr_down"/>
        </div>
        <div className="post_box">
            <div className="post_profil">
                <div className="profile_pic">
                    <img src="/Images/mali.jpg" className="profile_pic_img" />
                </div>
                <div className="name_part">
                    <h5>Mali Sir</h5>
                    <p>53min. </p>
                </div>
            </div>
            <div className="post_caption">
                    <p>Yo duniya kai savai vanda gandu mai ho.</p>
            </div>
            <div className="post_image">
                <img src="/Images/mali.jpg" alt="lolendra" className="post_image_style" />
            </div>
            <hr className="hr_up"/>
            <div className="post_react">
                <div className="like">
                    <ThumbUpOutlinedIcon className="like_icons"/>
                    <p>Like</p>
                </div>
                <div className="like">
                    <ChatBubbleOutlineOutlinedIcon className="like_icons"/>
                    <p>Comment</p>
                </div>
                <div className="like">
                    <ShareIcon className="like_icons"/>
                    <p>Share</p>
                </div>
            </div>
            <hr className="hr_down"/>
        </div>
        <div className="post_box">
            <div className="post_profil">
                <div className="profile_pic">
                    <img src="/Images/sudip.jpg" className="profile_pic_img" />
                </div>
                <div className="name_part">
                    <h5>Sudip Sir</h5>
                    <p>Just Now. </p>
                </div>
            </div>
            <div className="post_caption">
                    <p>Mah pani gandu nai ho.</p>
            </div>
            <div className="post_image">
                <img src="/Images/sudip.jpg" alt="lolendra" className="post_image_style" />
            </div>
            <hr className="hr_up"/>
            <div className="post_react">
                <div className="like">
                    <ThumbUpOutlinedIcon className="like_icons"/>
                    <p>Like</p>
                </div>
                <div className="like">
                    <ChatBubbleOutlineOutlinedIcon className="like_icons"/>
                    <p>Comment</p>
                </div>
                <div className="like">
                    <ShareIcon className="like_icons"/>
                    <p>Share</p>
                </div>
            </div>
            <hr className="hr_down"/>
        </div>
    </>    
    )
}

export default BodyPost;