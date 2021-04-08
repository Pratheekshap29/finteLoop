import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route ,HashRouter , Switch } from "react-router-dom";

import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'

import './scss/style.scss';

import Events from "./App/Events";
import Members from "./App/Members";
import Projects from "./App/Projects";
import Newss from "./App/Newss";
import Dashboard from "./App/Dashboard";



import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'

 React.icons = icons


const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  const TheLayout = React.lazy(() => import('./App/TheLayout'));

function App() {
    return (
    //     <div className="container">
            
    //         <Router basename="/">
    //         <div className="side-bar">
    //         <div className="menu">
    //         <div className="item "><Link to="/app/home"><i className="fas fa-desktop"></i>Dashboard</Link></div>
    //      <div className="item"><Link to="/app/newss"><i className="fas fa-table"></i>News </Link></div>
    //      <div className="item"><Link to="/app/members"><i className="fas fa-users"></i>Members</Link></div>
    //      <div className="item"><Link to="/app/events"><i className="fas fa-calendar"></i>Events</Link></div>
    //      <div className="item"><Link to="/app/projects"><i className="fa fa-book"></i>Projects</Link></div>

    //         </div>
    //         </div>

    //         <Route exact path="/app/home" component={Dashboard} />
    //                 <Route exact path="/app/events" component={Events} />
    //                 <Route exact path="/app/members" component={Members} />
    //                 <Route exact path="/app/projects" component={Projects} />
    //                 <Route exact path="/app/newss" component={Newss} />

    //         </Router>
    //  </div>
    <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}

                   
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />

              


              

            </Switch>
          </React.Suspense>
      </HashRouter>


    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<Provider store={store}>
        <App/>
      </Provider>, document.getElementById("root"));
}

serviceWorker.unregister();
