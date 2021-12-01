import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
function ItemDetails(props) {
  const [item, setItem] = useState("");
  const [isFavourite, setIsFavourite] = useState({});
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    
    
    setItem(props.location.state);
    user && axios.post("https://courxive.herokuapp.com/api/Favourite/check",{courseId:props.location.state.id,userId:user.user.id})
    .then((val)=>{
      
      setIsFavourite(val.data);
      // props.history.push("/dashboard");
    })
    .catch((err)=>console.log("error", err));
    user && axios.post("https://courxive.herokuapp.com/api/comment/allComment",{courseId:props.location.state.id})
    .then((val)=>{
      
      setAllComments(val.data);
      // props.history.push("/dashboard");
    })
    .catch((err)=>console.log("error", err));
  }, [props]);
  useEffect(()=>{
   
  },[])
  
 
  const handleData =(courseId, title)=> {
    
    if(user && user.token){
      const data = {
        courseId:courseId,
        userId:user.user.id,
        title:title,
        status:"unread"
      }
      if(Object.keys(isFavourite).length<1){
       
      user &&  axios.post("https://courxive.herokuapp.com/api/Favourite/add",data)
      .then((val)=>{
       
        setSuccess("Successfully Added to Favourite")
        setIsFavourite(val.data);
        // props.history.push("/dashboard");
      })
      .catch((err)=>console.log("error", err));
    }else{
     
      user &&  axios.post("https://courxive.herokuapp.com/api/Favourite/delete",{_id:isFavourite._id})
      .then((val)=>{
        
        setSuccess("Successfully Remove from Favourite")
        setIsFavourite({});
        // props.history.push("/dashboard");
      })
      .catch((err)=>console.log("error", err));
    }
  }else{
    setError("login to add Favourite courses")
  }
  setTimeout(function () {
    removeNotofications();
  }, 10000);
  }
  const removeNotofications = () => {
    setError("");
    setSuccess("");
  };
  const handleComment = (courseId)=>{
    console.log("comment", comment)
    if(user && user.token){
   user && axios.post("https://courxive.herokuapp.com/api/comment/add",{userId:user.user.id,msg:comment,courseId})
      .then((val)=>{
        console.log("res of Favourite", val);
        const prevComment = [...allComments]
        prevComment.push(val.data);
        setAllComments(prevComment);
        // props.history.push("/dashboard");
      })
      .catch((err)=>console.log("error", err));
    }else{
      setError("login to add Comment on courses")
    }
    setTimeout(function () {
      removeNotofications();
    }, 10000);
  }
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <section aria-label="section" className="mt90 sm-mt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src={item ? item.image_750x422 : null}
                className="img-fluid img-rounded mb-sm-30"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="item_info">
                <h2>{item ? item.title : null}</h2>
                <div className="item_info_counts">
                  <div className="item_info_like">
                    <i className="fa fa-star" />
                    {item.avg_rating ? item.avg_rating.toFixed(1) : item.rating ? (+item.rating).toFixed(1):null}
                  </div>
                </div>
                <p>
                   {item.description}
                </p>
                <h6>Creator</h6>
                <div className="item_author">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img
                        className="lazy"
                        src={
                          item && item.visible_instructors && item.visible_instructors[0]
                            ? item.visible_instructors[0].image ?item.visible_instructors[0].image:null
                            :item && item.visible_instructors?item.visible_instructors: null
                        }
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="author_list_info">
                    <a href="">
                      {item && item.visible_instructors && item.visible_instructors[0]
                        ? item.visible_instructors[0].name
                        : null}
                    </a>
                  </div>
                </div>
                <div className="spacer-40" />
                <div className="de_tab tab_simple">
                  <ul className="de_nav">
                    <li className="active">
                      <span onClick={()=>handleData(item.id,item.title)}>{Object.keys(isFavourite).length>0?"Remove from favourite":"Add to favorite"}</span>
                    </li>
                    <li>
                      <span>
                        {item.source=="udemy"?
                        <a
                          href={"https://www.udemy.com" + item.url}
                          target="_blank"
                        >
                          See Details
                        </a>:
                        <a
                        href={ item.url}
                        target="_blank"
                      >
                        See Details
                      </a>
}
                      </span>
                    </li>
                  </ul>
                  <div style={{ margin: "20px 0px" }} />
                  <h1>Comments</h1>
                  <div >
                      <textarea style={{width:"100%"}} value={comment} onChange={(e)=>setComment(e.target.value)}/>
                   <div className="comment__btnWrapper">
                   <a
                   onClick={()=>handleComment(item.id)}
                  className="btn-main wow fadeInUp lead animated"
                  data-wow-delay="1.25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.25s",
                    animationName: "fadeInUp",
                  }}
                >
                  Add Comment
                </a>
                     </div>
                    </div>
                  <ul className="activity-list">

                   { allComments.map((data,i)=>{
                     return(

                   
                   <li className="act_like">
                      {/* <img src="images/thumbnail-7.jpg" alt="" /> */}
                      <div
                        className="act_list_text"
                        style={{ backgroundSize: "cover" }}
                      >
                        {/* <h4>Cute Astronout</h4> */}
                        {data.message}{" "}
                        {/* <a href="#">Nicholas Daniels</a> */}
                        {/* <span class="act_list_date">Nicolas Daniels</span> */}
                      </div>
                    </li>  )
                   })}
                    {/* <li className="act_like">
                      <img src="images/thumbnail-7.jpg" alt="" />
                      <div
                        className="act_list_text"
                        style={{ backgroundSize: "cover" }}
                      >
                        <h4>Cute Astronout</h4>
                        This is the best course you can buy out there in market{" "}
                        <a href="#">Nicholas Daniels</a>
                        {/* <span class="act_list_date">Nicolas Daniels</span> */}
                      {/* </div>
                    </li>
                    <li className="act_like">
                      <img src="images/thumbnail-7.jpg" alt="" />
                      <div
                        className="act_list_text"
                        style={{ backgroundSize: "cover" }}
                      >
                        <h4>Cute Astronout</h4>
                        This is the best course you can buy out there in market{" "}
                        <a href="#">Nicholas Daniels</a>
                        {/* <span class="act_list_date">Nicolas Daniels</span> */}
                      {/* </div>
                    </li> */} 
                  </ul>
                </div>
              </div>
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
}

export default ItemDetails;
