import React from 'react'

function CardItem({data}) {
    return (
    <div className="col-lg-3 m-auto ">
        <div className="card mt-5" style={{width: "18rem"}}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.desc}</p>
            </div>
            <div className="card-body">
              <a href={data.link.href} className="card-link">{data.link.title}</a>
            </div>
          </div>
    </div>
    )
}

export default CardItem
