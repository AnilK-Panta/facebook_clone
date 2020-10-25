import React from "react";
import "./BodyRight.css";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';

const BodyRight=()=>{
    return(
        <div className="Home_right">
            <div className="title_1">
                <h3>Sponsored</h3>
            </div>
            <div className="sponsored_post">
                <div className="banner_support">
                    <img src="/Images/code1.png" className="banner_style" />
                </div>
                <div className="written_banner">
                    <h4>Educational Partner</h4>
                    <p>CodeIt a complete IT solutions</p>
                </div>
            </div>
            <div className="sponsored_post">
                <div className="banner_support">
                    <img src="/Images/code2.jpg" className="banner_style" />
                </div>
                <div className="written_banner">
                    <h4>Pubg Battel</h4>
                    <p>Winner Winner Chicken Dinner</p>
                </div>
            </div>
            <hr />
            <div className="title_2">
                <h3>Contacts</h3>
                <div className="Contact_icons">
                    <SearchSharpIcon />
                    <MoreHorizSharpIcon />
                </div>
            </div>
        </div>
    )
}

export default BodyRight;
