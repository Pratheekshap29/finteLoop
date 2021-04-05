import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Events from "./All/AllEvents";
import Projects from "./All/AllProjects";
import Newss from "./All/AllNews";


function All() {
    return (
        <div className="container">
            
            <Router basename="/">
            

           
                    <Route exact path="/AllEvents" component={Events} />
                   
                    <Route exact path="/AllProjects" component={Projects} />
                    <Route exact path="/AllNews" component={Newss} />

            </Router>
     </div>
    );
}

export default All;

if (document.getElementById("all")) {
    ReactDOM.render(<All />, document.getElementById("all"));
}






