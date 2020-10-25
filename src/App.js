import React from 'react';
import './App.css';
import { FaFacebook, FaSistrix} from 'react-icons/fa';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EmojiFlagsOutlinedIcon from '@material-ui/icons/EmojiFlagsOutlined';
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ChatSharpIcon from '@material-ui/icons/ChatSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import BodyLeft from './BodyLeft';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="navbar_first">
          <div className="navbar_first-logo">
            <FaFacebook className="navbar__fblogo"/>
          </div>
          <div className="navbar_search">
            <input className="navbar_formfield"
              type="text"
              placeholder="Facebook Search"
            />
            <FaSistrix className="search_icon"/>
          </div>
        </div>
        <div className="navbar_middle">
          <span class="middle_Icons_back">
            <HomeOutlinedIcon className="middle_icon_style"/>
          </span>
          <span class="middle_Icons_back">
            <EmojiFlagsOutlinedIcon className="middle_icon_style"/>
          </span>
          <span class="middle_Icons_back">
            <LiveTvSharpIcon className="middle_icon_style"/>
          </span>
          <span class="middle_Icons_back">
            <GroupWorkOutlinedIcon className="middle_icon_style"/>
          </span>
          <span class="middle_Icons_back">
            <SportsEsportsOutlinedIcon className="middle_icon_style"/>
          </span>
        </div>
        <div className="navbar_last">
          <span class="last_Icons_back">
            <AddOutlinedIcon className="last_icon_style"/>
          </span>
          <span class="last_Icons_back">
            <ChatSharpIcon className="last_icon_style"/>
          </span>
          <span class="last_Icons_back">
            <NotificationsSharpIcon className="last_icon_style"/>
          </span>
          <span class="last_Icons_back">
            <ArrowDropDownSharpIcon className="last_icon_style"/>
          </span>
        </div>
      </div>
      
    </>
  );
}

export default App;
