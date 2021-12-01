import  React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Tabs,Tab,Typography,Box} from "@material-ui/core"
import axios from "axios";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);
  const [isCourseChecked, setCourseChecked] = useState(false);
  const {localCourse,setLocalCourse,handleDeleteCourse} = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleUpdateCourse = (e,id) =>{
    axios.post("https://courxive.herokuapp.com/api/Favourite/update",{id:id,status:"read"})
      .then((val)=>{
        setCourseChecked(e.target.checked);
        
      const newArray =  localCourse.map(item=>{
          if(item._id == id){
               return {
                   ...item,
                   status:"read"
               }
          }
          return item
        });
      setLocalCourse(newArray);
        // setIsFavourite({});
        // props.history.push("/dashboard");
      })
      .catch((err)=>console.log("error", err));
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Favourite Courses" {...a11yProps(0)} />
          <Tab label="Course Completed" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {localCourse.some(course=>course.status == "unread")? localCourse.map((item,i)=>{
          if(item.status=="unread"){
  return(<div key={i} className="todo-item todo-customizeItem" >
                    {/* <div className="checker">
                      <span className>
                        <input type="checkbox" />
                      </span>
                    </div> */}
                    <span>{item.title}</span>
                    {/* <a
                      href="javascript:void(0);"
                      className="float-right remove-todo-item"
                    > */}
                    {/* onClick={()=>handleDeleteCourse(item._id)} */}
                   
                    <span className="todo-customizeRemove" >
                    <input style={{appearance:"auto"}} type="checkbox" checked={isCourseChecked} 
                    onChange={(e)=>handleUpdateCourse(e,item._id)}/>
                    {/* <i class="fa fa-trash-o" ></i> */}
                      </span>
                    {/* </a> */}
                  </div>)}}):
                  <p>No favourite Course exist. </p>}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {localCourse.some(course=>course.status == "read")? localCourse.map((item,i)=>{
          if(item.status=="read"){
  return(<div key={i} className="todo-item todo-customizeItem" >
                    {/* <div className="checker">
                      <span className>
                        <input type="checkbox" />
                      </span>
                    </div> */}
                    <span>{item.title}</span>
                    {/* <a
                      href="javascript:void(0);"
                      className="float-right remove-todo-item"
                    > */}
                    {/* onClick={()=>handleDeleteCourse(item._id)} */}
                   
                    <span className="todo-customizeRemove" onClick={()=>handleDeleteCourse(item._id)}>
                    {/* <input style={{appearance:"auto"}} type="checkbox" checked={isCourseChecked} 
                    onChange={(e)=>handleUpdateCourse(e,item._id)}/> */}
                    <i class="fa fa-trash-o" ></i>
                      </span>
                    {/* </a> */}
                  </div>)}}):
                  <p>No  Course completed. </p>}
      </TabPanel>
    
    </Box>
  );
}
