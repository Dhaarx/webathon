import React, { useState } from "react";
import "./Entry.css";
import Signin from "./Signin"
import Signup from "./Signup";

export default function Entry() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const e1 =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="oo">
    <div className="Entry">
      <div className={e1} id="container ">
        <Signin/>
        <Signup />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
                
                <h1>Welcome Back!</h1>

              
                <div className="e7">
                <p>
                To keep connected with us please login with your personal info
              </p>
                </div>
                <div className="boo">
                <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
                </div>
             
                
                
             
             
            </div>
            <div className="overlay-panel overlay-right">
                
                <h1>Hello, Friend!</h1>

              
                <div className="e7">
                <p>Enter your personal details and start journey with us</p>

                </div>
                <div className="boo">
                <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
                </div>
               
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
