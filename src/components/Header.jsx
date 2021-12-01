import React from "react";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  return (
    <header className="transparent header-light scroll-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  {/* logo begin */}
                  <div id="logo">
                    <a href="/">
                      <p>Courxive</p>
                    </a>
                  </div>
                  {/* logo close */}
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainmenu begin */}
                <ul id="mainmenu">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  {/* <li>
                    <a href="index-2.html">About Us</a>
                  </li> */}
                  
                  {user && user.token ?
                    <>
                    <li>
                    <a href="/dashboard">Favorite Courses</a>
                  </li>
                  <li>
                  <a href="/editProfile">Edit Profile</a>
                </li>
                     <li>
                     <a onClick={handleLogout}>Logout</a>
                   </li>
                   </>
                :
                <>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li></>
                  }
                </ul>
                <div className="menu_side_area">
                  <span id="menu-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
