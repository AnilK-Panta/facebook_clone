import React from "react";
import "./BodyMiddleStory.css";
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';

const BodyMiddleStory=()=>{
    return(
        <div className="Home_Middle">
            <div className="story_section">
                <div className="Img_box">
                    <div className="bg_image">
                        <img src="/Images/myphoto.png" className="story_img_style">
                        </img>
                    </div>
                </div>
                <div className="Img_box">
                    <div className="bg_image">
                        <img src="/Images/sudip.jpg" className="story_img_style">
                        </img>
                    </div>
                </div>
                <div className="Img_box">
                    <div className="bg_image">
                        <img src="/Images/mali.jpg" className="story_img_style">
                        </img>
                    </div>
                </div>
                <div className="Img_box">
                    <div className="bg_image">
                        <img src="/Images/sudarshan.jpg" className="story_img_style">
                        </img>
                    </div>
                </div>
                <div className="Img_box_1">
                    <div className="bg_image">
                        <img src="/Images/rohit.jpg" className="story_img_style">
                        </img>
                    </div>
                    {/* <div className="arrow_right">
                        <ArrowForwardSharpIcon />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default BodyMiddleStory;