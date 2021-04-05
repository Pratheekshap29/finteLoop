import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Events from "./App/Events";
import Members from "./App/Members";
import Projects from "./App/Projects";
import Newss from "./App/Newss";
import Dashboard from "./App/Dashboard";

function App() {
    return (
        <div className="container">
            
            <Router basename="/">
            <div className="side-bar">
            <div className="menu">
            <div className="item "><Link to="/app/home"><i className="fas fa-desktop"></i>Dashboard</Link></div>
         <div className="item"><Link to="/app/newss"><i className="fas fa-table"></i>News </Link></div>
         <div className="item"><Link to="/app/members"><i className="fas fa-users"></i>Members</Link></div>
         <div className="item"><Link to="/app/events"><i className="fas fa-calendar"></i>Events</Link></div>
         <div className="item"><Link to="/app/projects"><i className="fa fa-book"></i>Projects</Link></div>

            </div>
            </div>

            <Route exact path="/app/home" component={Dashboard} />
                    <Route exact path="/app/events" component={Events} />
                    <Route exact path="/app/members" component={Members} />
                    <Route exact path="/app/projects" component={Projects} />
                    <Route exact path="/app/newss" component={Newss} />

            </Router>
     </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
