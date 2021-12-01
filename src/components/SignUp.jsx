import axios from "axios";
import React, { useState, Fragment } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [InterestOfLearning, setInterestOfLearning] = useState("");
  const [loginError, setLoginError] = useState({});
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const validate = (obj) => {
    let error = {};
    let isValid = true;
    if (obj.name == "") {
      error["name"] = "name should not be empty";
      isValid = false;
    }
    if (obj.password == "") {
      error["password"] = "password should not be empty";
      isValid = false;
    }
    if (obj.phone == "") {
      error["phone"] = "phone should not be empty";
      isValid = false;
    }
    if (obj.InterestOfLearning == "") {
      error["InterestOfLearning"] = "InterestOfLearning should not be empty";
      isValid = false;
    }
    if (obj.password != obj.confirmPassword) {
      error["password"] = " password should be same";
      isValid = false;
    }
    return { error, isValid };
  };
  const onSubmit = (e) => {
    console.log("submited");
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      phone,
      InterestOfLearning,
      confirmPassword,
    };
    const { error, isValid } = validate(formData);
    console.log("validate response", error, isValid);
    if (isValid) {
      const data = {
        name,
        email,
        password,
        phone,
        InterestOfLearning,
      };
      axios
        .post("https://courxive.herokuapp.com/api/auth/register", data)
        .then((val) => {
          console.log("res of signup", val);
          window.location.href = "/login";
          setSuccess("Registeration Successfull");
          // Sent User to Login Page
        })
        .catch((err) => {
          console.log(err.request,err.response.data.error,err);
           setError(err.response.data.error);
          // if (err.response.data.password) {
          //   setError(err.response.data.password);
          // }
          // else if(err.response.data.){
          //   setError(err.response.data.password);
          // }
        });
    } else {
      setError("Please fill out all fields with proper format");
    }
    setTimeout(function () {
      removeNotofications();
    }, 3000);
  };

  const removeNotofications = () => {
    setError("");
    setSuccess("");
  };
  return (
    <Fragment>
      <section aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h3>Don't have an account? Register now.</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="spacer-10" />
              <form
                name="contactForm"
                // id="contact_form"
                className="form-border"
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Name:</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Email Address:</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Your Interest Of Learning</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        value={InterestOfLearning}
                        onChange={(e) => setInterestOfLearning(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Phone:</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Re-enter Password:</label>
                      <input
                        type="password"
                        name="re-password"
                        id="re-password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div id="submit" className="pull-left">
                      <input
                        type="submit"
                        id="register_user"
                        defaultValue="Register Now"
                        className="btn btn-main color-2"
                        onClick={onSubmit}
                      />
                    </div>
                    <div id="mail_success" className="success">
                      Your message has been sent successfully.
                    </div>
                    <div id="mail_fail" className="error">
                      Sorry, error occured this time sending your message.
                    </div>
                    <div className="clearfix" />
                  </div>
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
    </Fragment>
  );
};

export default Signup;
