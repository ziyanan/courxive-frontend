import logo from "./logo.svg";
import "./App.css";

// Import Pages
import HEADER from "./components/Header.jsx";
import FOOTER from "./components/Footer.jsx";
import HOMEPAGE from "./components/Homepage.jsx";

import ITEMDETAILS from "./components/item-details.jsx";
import DASHBOARD from "./components/Dashboard.jsx";
import LOGIN from "./components/login.jsx";
import SIGNUP from "./components/SignUp.jsx";
import EditProfile from "./components/editProfile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div id="wrapper">
     
      <Route exact path="/">
      <HEADER />
        <HOMEPAGE />
      </Route>
      <Route path="/course" render={(props) => <><HEADER />  <ITEMDETAILS {...props}/></>} />
      {/* <Route exact path="/course" >
      <HEADER />
        <ITEMDETAILS/>
      </Route> */}
      <Route exact path="/login">
        <div className="authWrapper">
      <HEADER />
        <LOGIN/>
        </div>
      </Route>
      <Route exact path="/register" >
      <div className="authWrapper">
      <HEADER />
        <SIGNUP/>
        </div>
      </Route>
      <Route exact path="/dashboard" >
      <HEADER />
        {
         user && user.token ?
          <DASHBOARD/>:
          <Redirect to="/login"/>
        }
      </Route>
      <Route exact path="/editProfile" >
      <HEADER />
      {
         user && user.token ?
          <EditProfile/>:
          <Redirect to="/login"/>
        }
      </Route>
      <FOOTER />
      {/* <DASHBOARD /> */}
    </div>
  );
}

export default App;
