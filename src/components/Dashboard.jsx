import React,{useState,useEffect} from "react";
import axios from "axios";
import FavouriteCourses from "./FavouriteCourses"
const Dashboard = () => {
  const [localCourse, setLocalCourse] = useState([]);
  const [isCourseChecked, setCourseChecked] = useState(false);
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    user && axios.post("https://courxive.herokuapp.com/api/Favourite/allCourse",{userId:user.user.id})
    .then(res=>{
      console.log("all course res", res)
      setLocalCourse(res.data)
    })
    .catch(err=>console.log("all course err", err))
  },[]);
  const handleDeleteCourse = (id) =>{
    axios.post("https://courxive.herokuapp.com/api/Favourite/delete",{_id:id})
      .then((val)=>{
        console.log("res of Favourite", val);
      const newArray =  localCourse.filter(item=>item._id != id);
      setLocalCourse(newArray);
        // setIsFavourite({});
        // props.history.push("/dashboard");
      })
      .catch((err)=>console.log("error", err));
  }
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      {/* section begin */}
      <section id="subheader" className="text-light">
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Dashboard</h1>
                <p>You can add Your Courses here</p>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </section>
      {/* section close */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                {/* <form action="javascript:void(0);">
                  <input
                    type="text"
                    className="form-control add-task"
                    placeholder="Add New Course Here"
                  />
                </form> */}
                {/* <ul className="nav nav-pills todo-nav">
                  <li role="presentation" className="nav-item all-task active">
                    <a href="#" className="nav-link">
                      All
                    </a>
                  </li>
                  <li role="presentation" className="nav-item active-task">
                    <a href="#" className="nav-link">
                      Active
                    </a>
                  </li>
                  <li role="presentation" className="nav-item completed-task">
                    <a href="#" className="nav-link">
                      Completed
                    </a>
                  </li>
                </ul> */}
                <FavouriteCourses localCourse={localCourse} setLocalCourse={setLocalCourse} handleDeleteCourse={(id)=>handleDeleteCourse(id)}/>
                

                {/* <div className="todo-list" >
                  <div className="todo-item" >
                    <div className="checker">
                      <span className>
                        <input type="checkbox" />
                      </span>
                    </div>
                    <span>Create theme</span>
                    <a
                      href="javascript:void(0);"
                      className="float-right remove-todo-item"
                    >
                      <i className="icon-close" />
                    </a>
                  </div>
                  <div className="todo-item" >
                    <div className="checker">
                      <span className>
                        <input type="checkbox" />
                      </span>
                    </div>
                    <span>Work on wordpress</span>
                    <a
                      href="javascript:void(0);"
                      className="float-right remove-todo-item"
                    >
                      <i className="icon-close" />
                    </a>
                  </div>
                  <div className="todo-item">
                    <div className="checker">
                      <span className>
                        <input type="checkbox" />
                      </span>
                    </div>
                    <span>Organize office main department</span>
                    <a
                      href="javascript:void(0);"
                      className="float-right remove-todo-item"
                    >
                      <i className="icon-close" />
                    </a>
                  </div>
                  <div className="todo-item">
                    <div className="checker">
                      <span>
                        <input type="checkbox" />
                      </span>
                    </div>
                    <span>Error solve in HTML template</span>
                    <a
                      href="javascript:void(0);"
                      className="float-right remove-todo-item"
                    >
                      <i className="icon-close" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
