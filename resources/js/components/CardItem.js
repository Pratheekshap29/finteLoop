import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function CardItem({data}) {
    return (
    <div className="col-lg-3 m-auto ">
        <div className="card mt-5" style={{width: "18rem"}}>
            <img className="card-img-top" src={data.eventsimage} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{data.eventsname}</h5>
              <p className="card-text">{data.description}</p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">Know more</a>

              
            </div>
          </div>
    </div>
    )
}

export default CardItem
