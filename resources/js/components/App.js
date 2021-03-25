import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Events from './App/Events';
import Members from './App/Members';
import Projects from './App/Projects';
import Newss from './App/Newss';

function App() {
    return (
        <Router basename="/">
            <div>
                <Link to="/app/home">Dashboard</Link>
                <Link to="/app/events">Event</Link>
                <Link to="/app/members">Members</Link>
                <Link to="/app/projects">Projects</Link>
                <Link to="/app/newss">News</Link>
                <Route exact path="/app/home" />
                <Route exact path="/app/events" component={Events}/>
                <Route exact path="/app/members" component={Members}/>
                <Route exact path="/app/projects" component={Projects}/>
                <Route exact path="/app/newss" component={Newss}/>
            </div>
        </Router>
        // <div className="container">
        //     <div className="row justify-content-center">
        //         <div className="col-md-8">
        //             <div className="card">
        //                 <div className="card-header">Blah .....Component</div>

        //                 <div className="card-body">I'm an example component!</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
