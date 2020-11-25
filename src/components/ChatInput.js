import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/ChatInput.css";
import { useStateValue } from "../context api/StateProvider";
import firebase from "firebase";
import { database } from "../configs/firebase";

export default function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      database.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      });
      setInput("");
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName?.toLowerCase()}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}
