import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/SidebarOption.css";
import { database } from "../configs/firebase";

export default function SidebarOption({ Icon, title, addChannelOption, id }) {
  const history = useHistory();

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      database.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}
