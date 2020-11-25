import React from "react";
import "../styles/Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../context api/StateProvider";

export default function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar for logged in user  */}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
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
