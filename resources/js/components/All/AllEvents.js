import React, { useEffect, useState } from "react";
// import $ from "jquery";
import axios from 'axios';
import { BASE_API } from "../../config";

function AllEvents() {

    const [eventsArr, setEvents] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_API}/events`).then((res) => {
            setEvents(res.data);
            console.log(res.data);
        });
    }, []);
    return (
        
        <div class="container ">

{eventsArr.map((events, index) => (
            
           
       

        <div class="row featurette pt-5 mt-5">
      <div class="col-md-7">
        <h2 class="featurette-heading">{events.eventsname} <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

))}
    </div>
    )
}

export default AllEvents
