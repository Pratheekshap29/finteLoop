import React from "react";

function Member({data}) {
    console.log('data', data); 
    return (
        <div className="testimonial">
            <div className="testimonial-content">
                <div className="pic">
                    <img
                        src={data.mimage}
                        alt=""/>
                </div>
                <h3 className="name">{data.name}</h3>
                <span className="title">{data.skills}</span>
                {/* <span className="title">{data.skills}</span> */}
            </div>
        </div>
    );
}

export default Member;
