import React from "react";

const Footer = () => {
  return (
    <div>
      {/* content close */}
      <a href="#" id="back-to-top" />
      {/* footer begin */}
      <footer className="footer-light">
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex">
                  <div className="de-flex-col">
                    <a href="index-2.html">
                      <img alt="" className="f-logo" src="images/logo.png" />
                      <span className="copy">
                        © Copyright 2021 - Designed by Angie &amp; Team
                      </span>
                    </a>
                  </div>
                  <div className="de-flex-col">
                    <div className="social-icons">
                      <a href="#">
                        <i className="fa fa-facebook fa-lg" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter fa-lg" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin fa-lg" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest fa-lg" />
                      </a>
                      <a href="#">
                        <i className="fa fa-rss fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer close */}
    </div>
  );
};

export default Footer;
