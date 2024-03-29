// importing react router dom!
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage";
import CreateBlog from "./Components/Create Blog/CreateBlog";
import Feed from "./Components/Feed/Feed";
import SpecificBlog from "./Components/Specific Blog/Specific_blog";
import LoginSignup from "./Components/Login Signup/LoginSignup"
import Profile from "./Components/Profile/Profile"
import Navbar from "./Components/Navbar/Navbar";
import LogoutComponent from "./Components/Logout/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Navbar />
          <Homepage />
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <Feed />
        </Route>
        <Route path="/blog/:blogId">
          <Navbar />
          <SpecificBlog />
        </Route>
        <Route path="/create-blog">
          <Navbar />
          <CreateBlog />
        </Route>
        <Route path="/login-signup">
          <LoginSignup />
        </Route>
        <Route path="/profile">
          <Navbar />
          <Profile />
        </Route>
        <Route path="/logout">
          <LogoutComponent/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
