import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Login.css";
import { auth, provider } from "../configs/firebase";

export default function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
          alt="slack logo"
        />
        <h1>Sign in to Seytech HQ</h1>
        <p>seytech.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}
