import React from 'react'

function ProjectSlide({data}) {
    return (
        <div className="post-slide">
                <div className="post-img">
                  <img src={data.pimage} alt=""/>
                  <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <a href={data.link}>{data.title}</a>
                  </h3>
                  <p className="post-description">{data.desc}</p>
                  <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                  <a href={data.link} className="read-more">Know more</a>
                </div>
        </div>
    )
}

export default ProjectSlide
