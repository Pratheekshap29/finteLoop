import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_API } from "../config";
import CardItem from './CardItem';

import Slider from "react-slick";

function Events() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
  };
    const [cardArr, setEvents] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_API}/events`).then((res) => {
            setEvents(res.data);
            console.log(res.data);
        });
    }, []);
    // const cardArr=[
    //     {
    //         title: 'Card Title',
    //         desc: 'Card Desc',
    //         link: {
    //             title: 'link title',
    //             href: '/about'
    //         }
    //     },
    //     {
    //         title: 'Card Title',
    //         desc: 'Card Desc',
    //         link: {
    //             title: 'link title',
    //             href: '/about'
    //         }
    //     },
    //     {
    //         title: 'Card Title',
    //         desc: 'Card Desc',
    //         link: {
    //             title: 'link title',
    //             href: '/about'
    //         }
    //     },
    // ]
    return (
  <section id="events">

<h2 className="white-heading text-center">Events</h2>

<div>
        
        <Slider {...settings}>
         
          {cardArr.map((card, index) => (
             <div>
            <CardItem key={index} data={card} />
            </div>
        ))}

{cardArr.map((card, index) => (
             <div>
            <CardItem key={index} data={card} />
            </div>
        ))}
          
        </Slider>
      </div>
  {/* <div className="container pb-5 mt-5" >
    <h2 className="text-center white-heading">Events</h2>
      <div className="row">
        {cardArr.map((card, index) => (
            <CardItem key={index} data={card} />
        ))}
    </div>   
  </div> */}
</section>
    )
}

export default Events
