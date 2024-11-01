// AuthApp.tsx
import React from "react";
import "../Styles/Logins.css";

const Login: React.FC = () => {
  const [signIn, toggle] = React.useState<boolean>(true);

  return (
    <div className="container">
      <div className={`sign-up-container ${signIn ? "hidden" : ""}`}>
        <form className="form">
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button" className="button">
            Sign Up
          </button>
        </form>
      </div>

      <div className={`sign-in-container ${signIn ? "" : "hidden"}`}>
        <form className="form">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="a" className="anchor">
            Forgot your password?
          </a>
          <button type="button" className="button">
            Sign In
          </button>
        </form>
      </div>

      <div className={`overlay-container ${signIn ? "" : "active"}`}>
        <div className="overlay">
          <div className="left-overlay-panel">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              type="button"
              className="ghost-button"
              onClick={() => toggle(true)}
            >
              Sign In
            </button>
          </div>
          <div className="right-overlay-panel">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button
              type="button"
              className="ghost-button"
              onClick={() => toggle(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
