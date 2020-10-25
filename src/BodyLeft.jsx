import React from "react";
import "./BodyLeft.css";

const BodyLeft = () =>{
    return(
        <div className="Home_left">
            <div className="Left_list_top">
                <div className="Image_part">
                    <img src="/Images/myphoto.png" alt="" className="Image_style" />
                </div>
                <div className="Name_part">
                    <p>Anil K. Panta</p>
                </div>
            </div>
            <div className="Left_list">
                <div className="Image_part">
                    <img src="/Images/mali.jpg" alt="" className="Image_style" />
                </div>
                <div className="Name_part">
                    <p>Mali Sir</p>
                </div>
            </div>
            <div className="Left_list">
                <div className="Image_part">
                    <img src="/Images/sudip.jpg" alt="" className="Image_style" />
                </div>
                <div className="Name_part">
                    <p>Sudip Sir</p>
                </div>
            </div>
            <div className="Left_list">
                <div className="Image_part">
                    <img src="/Images/sudarshan.jpg" alt="" className="Image_style" />
                </div>
                <div className="Name_part">
                    <p>Sudarshan</p>
                </div>
            </div>
            <div className="Left_list">
                <div className="Image_part">
                    <img src="/Images/rohit.jpg" alt="" className="Image_style" />
                </div>
                <div className="Name_part">
                    <p>Rohit Sir</p>
                </div>
            </div>
        </div>
    )
}

export default BodyLeft;