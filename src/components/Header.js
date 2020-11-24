import React from "react";
import "../styles/Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar for logged in user  */}
        <Avatar
          className="header__avatar"
          alt="Elliot Alderson"
          src="https://avatars0.githubusercontent.com/u/43115122?s=460&u=63e0d46721cbdb324d204c461a47f0dc0d3b5840&v=4"
        />
        {/* Time icon  */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* Search icon  */}
        <SearchIcon />
        {/* input  */}
        <input type="text" placeholder="Search" />
      </div>
      <div className="header__right">
        {/* Help icon  */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}
