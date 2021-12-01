import React from "react";
import COURSES from "./courses.jsx";

const Homepage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <section
        id="section-hero"
        aria-label="section"
        className="no-top no-bottom vh-100"
      >
        <div className="v-center" style={{ backgroundSize: "cover" }}>
          <div className="container" style={{ backgroundSize: "cover" }}>
            <div
              className="row align-items-center"
              style={{ backgroundSize: "cover" }}
            >
              <div className="col-md-6" style={{ backgroundSize: "cover" }}>
                <div
                  className="spacer-single"
                  style={{ backgroundSize: "cover" }}
                />
                <h6
                  className="wow fadeInUp animated"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  <span className="text-uppercase id-color-2">
                    Search Engine
                  </span>
                </h6>
                <div
                  className="spacer-10"
                  style={{ backgroundSize: "cover" }}
                />
                <h1
                  className="wow fadeInUp animated"
                  data-wow-delay=".75s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.75s",
                    animationName: "fadeInUp",
                  }}
                >
                  Discover <span className="id-color-2">rare</span> courses from
                  all big paltforms.
                </h1>
                <p
                  className="wow fadeInUp lead animated"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  This Website gets the data from websites like udemy and show
                  courses and divide them according to categories and people can
                  add courses in their favorit list.
                </p>
                <div
                  className="spacer-10"
                  style={{ backgroundSize: "cover" }}
                />
                {!user && (
                  <>
                    <a
                      href="/login"
                      className="btn-main wow fadeInUp lead animated"
                      data-wow-delay="1.25s"
                      style={{
                        visibility: "visible",
                        animationDelay: "1.25s",
                        animationName: "fadeInUp",
                      }}
                    >
                      Login
                    </a>
                    &nbsp;
                  </>
                )}
                <a
                  href="create-options.html"
                  className="btn-main btn-light wow fadeInUp lead animated"
                  data-wow-delay="1.25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.25s",
                    animationName: "fadeInUp",
                  }}
                >
                  Search
                </a>
                <div className="row" style={{ backgroundSize: "cover" }}>
                  <div
                    className="spacer-single"
                    style={{ backgroundSize: "cover" }}
                  />
                  <div className="row" style={{ backgroundSize: "cover" }}>
                    <div
                      className="
                     col-lg-4 col-md-6 col-sm-4
                     wow
                     fadeInRight
                     mb30
                     animated
                   "
                      data-wow-delay="1.1s"
                      style={{
                        backgroundSize: "cover",
                        visibility: "visible",
                        animationDelay: "1.1s",
                        animationName: "fadeInRight",
                      }}
                    >
                      <div
                        className="de_count text-left"
                        style={{ backgroundSize: "cover" }}
                      >
                        <h3>
                          <span>94215</span>
                        </h3>
                        <h5>Tutors</h5>
                      </div>
                    </div>
                    <div
                      className="
                     col-lg-4 col-md-6 col-sm-4
                     wow
                     fadeInRight
                     mb30
                     animated
                   "
                      data-wow-delay="1.4s"
                      style={{
                        backgroundSize: "cover",
                        visibility: "visible",
                        animationDelay: "1.4s",
                        animationName: "fadeInRight",
                      }}
                    >
                      <div
                        className="de_count text-left"
                        style={{ backgroundSize: "cover" }}
                      >
                        <h3>
                          <span>27</span>k
                        </h3>
                        <h5>Courses</h5>
                      </div>
                    </div>
                    <div
                      className="
                     col-lg-4 col-md-6 col-sm-4
                     wow
                     fadeInRight
                     mb30
                     animated
                   "
                      data-wow-delay="1.7s"
                      style={{
                        backgroundSize: "cover",
                        visibility: "visible",
                        animationDelay: "1.7s",
                        animationName: "fadeInRight",
                      }}
                    >
                      <div
                        className="de_count text-left"
                        style={{ backgroundSize: "cover" }}
                      >
                        <h3>
                          <span>12,224</span>
                        </h3>
                        <h5>Students</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-sm-30" style={{ backgroundSize: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <COURSES />
    </div>
  );
};

export default Homepage;
