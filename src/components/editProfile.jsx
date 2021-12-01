import React, {useState, useEffect} from 'react'
import axios from "axios";
export default function EditProfile(props) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [InterestOfLearning,setInterestOfLearning] = useState("");
    const [file, setFile] = useState(null)
    const [prevImage, setPrevImage] = useState("");
    const [authUser,setAuthUser] = useState({});
    const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
    useEffect(() => {
      console.log("editprofile use effect")
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("editprofile use effect",user)
           setName(user.user.name);
           setEmail(user.user.email);
           setPhone(user.user.phone);
           setPrevImage(user.user.image);
           setInterestOfLearning(user.user.InterestOfLearning);
           setAuthUser(user)
    }, [])
    
    const onSubmit = (e) =>{
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        const formData = {
            name,
            phone,
            InterestOfLearning,
            userId:authUser.user.id
          }
          console.log("form data", formData)
         
        if(file != null){
          console.log("yes image exsit");
        const data = new FormData();
        data.append("file", file[0]);
        data.append("upload_preset", "ml_default");
        axios
          .post(
            "https://api.cloudinary.com/v1_1/dkru1aq3k/image/upload",
            data
          )
          .then((res) => {
           console.log("response", res)
            axios.post("https://courxive.herokuapp.com/api/profile/update",{...formData,image:res.data.secure_url})
            .then((val)=>{
              console.log("res of editProfile", val);
              const structData = {
                token:authUser.token,
                user:{
                  ...val.data,
                  id:val.data._id

                }
              }
              localStorage.setItem("user", JSON.stringify(structData));
              setSuccess("successfuly updated")
            })
            .catch((err)=>console.log("error", err));
          })
          .catch((err) => console.log(err));
        }else{
            axios.post("https://courxive.herokuapp.com/api/profile/update",{...formData,image:prevImage})
            .then((val)=>{
              const structData = {
                token:authUser.token,
                user:{
                  ...val.data,
                  id:val.data._id
                }
              }
              localStorage.setItem("user", JSON.stringify(structData));
              setSuccess("successfuly updated")
              
            })
            .catch((err)=>console.log("error", err));
        }
      
        setTimeout(function () {
          removeNotofications();
        }, 10000);
       
    }
    const removeNotofications = () => {
      setError("");
      setSuccess("");
    };
    const handleUploadImg = (e)=>{
        console.log("url =", url,e.target.files[0]);
        var reader = new FileReader();
  var url = URL.createObjectURL(e.target.files[0])
  
        console.log("url", url,e.target.files[0]);
        setPrevImage(url)
        setFile(e.target.files)
    }
    return (
        <div className="container editProfile">
            <section aria-label="section">
        <div className="container">
          <div className="row">
         
          <div className="col-sm-12 d-flex justify-content-center" >
                <label for="imageFile">
                  <div className="editProfile__imgBox" style={{backgroundImage:"url("+prevImage+")"}}> </div>
                  </label>
                  <input onChange={(e)=>handleUploadImg(e)} className="editProfile__imgInput" type="file" id="imageFile"/>
              </div>
            
            
            <div className="col-sm-12 ">
                
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
                      onChange={(e)=>setName(e.target.value)}
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
                      onChange={(e)=>setInterestOfLearning(e.target.value)}
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
                      onChange={(e)=>setPhone(e.target.value)}
                    />
                  </div>
                </div>
                
               
            
              </div>
            </form>
            <div className="col-md-12">
                  <div id="submit" className="pull-left">
                    <input
                      type="submit"
                      id="register_user"
                      defaultValue="Register Now"
                      className="btn btn-main color-2"
                      onClick={(e)=>onSubmit(e)}
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
    )
}
