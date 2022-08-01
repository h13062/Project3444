import React, { useEffect, useState } from "react";
import "./register.css";
import { Navbar } from "../../component";

const Register = () => {
  const apiServerEndpoint = "/api/";

  // const [testedArray, setTestedArray] = useState(null);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://localhost:7169" + apiServerEndpoint + "user", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="login-page">
        {/**Header */}
        <div className="login-header">
          <h1>LOGIN</h1>
          <p>
            Log in to your account to make orders, get our restaurant updates,
            and more!
          </p>
        </div>
        {/**End header */}

        <div className="login-registration">
          {/* Left */}
          <div class="split left">
            <div class="centered">
              <div className="form">
                <div className="header">
                  <h2>Login</h2>
                </div>
                <div className="form-body">
                  <div className="form-body">
                    <div className="name">
                      <input
                        className="form__input"
                        type="text"
                        id="name"
                        required
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="username">
                      <input
                        className="form__input"
                        type="text"
                        id="username"
                        required
                        placeholder="Username"
                      />
                    </div>
                    <div className="email">
                      <input
                        type="email"
                        id="email"
                        className="form__input"
                        required
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div class="footer">
                    <button type="submit" class="btn">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End left */}
          <div className="dash"></div>
          {/* Right */}
          <div class="split right">
            <div class="centered">
              <div className="form">
                <div className="header">
                  <h2>Register</h2>
                </div>
                <div className="form-body">
                  <div className="name">
                    <input
                      className="form__input"
                      type="text"
                      id="name"
                      required
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="username">
                    <input
                      className="form__input"
                      type="text"
                      id="username"
                      required
                      placeholder="Username"
                    />
                  </div>
                  <div className="email">
                    <input
                      type="email"
                      id="email"
                      className="form__input"
                      required
                      placeholder="Email"
                    />
                  </div>
                  <div className="password">
                    <input
                      className="form__input"
                      type="password"
                      id="password"
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div className="confirm-password">
                    <input
                      className="form__input"
                      type="password"
                      id="confirmPassword"
                      required
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div class="footer">
                  <button type="submit" class="btn">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**End right */}
        </div>
      </div>
    </>
  );
};

export default Register;
