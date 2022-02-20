import { Button } from "@mui/material";
import React from "react";
import { LoginContainer, LoginInnerContainer } from "./login.styles";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png"
          alt="slack logo"
        />
        <h1>Sign in to PAPA Fam</h1>
        <p>papa.slack.com</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
