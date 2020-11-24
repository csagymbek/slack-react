import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
          alt="slack logo"
        />
        <h1>Sign in to Seytech HQ</h1>
        <p>seytech.slack.com</p>
        <Button>Sign In with Google</Button>
      </div>
    </div>
  );
}
