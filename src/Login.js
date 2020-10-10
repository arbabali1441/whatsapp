import React from 'react';
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
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
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>
          <h1>Sign In With Google</h1>
        </Button>
      </div>
    </div>
  );
}

export default Login
