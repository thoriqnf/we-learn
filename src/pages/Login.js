import React from 'react'
import {
  Link,
} from "react-router-dom";

// pages css
import "../css/style-login.css";
function Login() {
  const handleclicklogin = () => {
    console.log("tes");
  };
  const handleclicksignup = () => {
    console.log("tes2");
  };
  return (
    <div className="App">
        <div className="background-login">
          <div id="card-title-login">
            <h1>LOGIN</h1>
            <p>Silahkan Login Terlebih Dahulu</p>
          </div>
        </div>
        <div className="box-login">
          <div className="box-login2">
            <form method="post" className="form-login">
              <label className="label-login">
                {" "}
                <h2 className="form-login-username">Username</h2>
                <input
                  id="user-email"
                  className="form-content-login"
                  type="Email"
                  name="Email"
                  placeholder="M a s u k k a n  U s e r n a m e"
                  autoComplete="on"
                  required
                />
              </label>

              <label className="label-login">
                <h2 className="form-login-username">Password</h2>
                <input
                  id="user-password"
                  className="form-content-login"
                  type="Password"
                  name="Password"
                  placeholder="M a s u k k a n  P a s s w o r d"
                  autoComplete="on"
                  required
                />
              </label>

              <Link to="/home">
                <div id="button-login">
                  <button type="submit" id="submit-login" onClick={handleclicklogin}>
                    <a href="login.html">Login</a>
                  </button>
                </div>
              </Link>

              <Link to="/signup">
              <div id="button-login2">
                <button type="submit" id="submit2-login" onClick={handleclicksignup}>
                  <a href="signup.html">Belum Punya Akun ?</a>
                </button>
              </div>
              </Link>

            </form>
          </div>
        </div>
        <div className="background-login2"></div>
      </div>
  );
}
export default Login