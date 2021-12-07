import React, { useState } from "react";
import axios from "axios";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const onSubmit = (e) => {
    // prevent auto-refresh
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post("https://courxive.herokuapp.com/api/auth/login", data)
      .then((val) => {
        console.log("res of login", val.data);
        setSuccess("Login Successfull");
        // removeNotofications();
         localStorage.setItem("user", JSON.stringify(val.data));
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        console.log("error working", err.response.data.msg);
        setError(err.response.data.msg);
        // removeNotofications();
      });
    setTimeout(function () {
      removeNotofications();
    }, 10000);
  };

  const removeNotofications = () => {
    setError("");
    setSuccess("");
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      {/* section begin */}
      <section
        id="subheader"
        className="text-light"
        data-bgimage="url(images/background/subheader.jpg) top"
      >
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>User Login</h1>
                <p>Anim pariatur cliche reprehenderit</p>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </section>
      {/* section close */}
      <section aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form name="contactForm" className="form-border" method="post">
                <h3>Login to your account</h3>
                <div className="field-set">
                  <label>Email</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field-set">
                  <label>Password</label>
                  <input
                    type="password"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div id="submit">
                  <input
                    type="submit"
                    defaultValue="Login"
                    className="btn btn-main color-2"
                    onClick={onSubmit}
                  />
                  <div id="mail_success" className="success">
                    Your message has been sent successfully.
                  </div>
                  <div id="mail_fail" className="error">
                    Sorry, error occured this time sending your message.
                  </div>
                  <div className="clearfix" />
                  <div className="spacer-single" />
                  {/* social icons */}
                  <ul className="list s3">
                    <li>Or login with:</li>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Google</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                  </ul>
                  {/* social icons close */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {error ? (
        <div
          class="toast animate__animated  animate__fadeInRightBig"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            {/* <img src="..." class="rounded mr-2" alt="..." /> */}
            <strong class="mr-auto">Message</strong>
            {/* <small class="text-muted">11 mins ago</small> */}
          </div>
          <div class="toast-body" style={{ color: "red" }}>
            {error ? error : null}
          </div>
        </div>
      ) : null}

      {success ? (
        <div
          class="toast  animate__animated  animate__fadeInRightBig"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            {/* <img src="..." class="rounded mr-2" alt="..." /> */}
            <strong class="mr-auto">Message</strong>
            {/* <small class="text-muted">11 mins ago</small> */}
          </div>
          <div class="toast-body" style={{ color: "green" }}>
            {success ? success : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
