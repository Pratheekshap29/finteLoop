import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_API } from "../config";
import CardItem from './CardItem';

function Events() {
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
  <div className="container pb-5 mt-5" >
    <h2 className="text-center white-heading">Events</h2>
      <div className="row">
        {cardArr.map((card, index) => (
            <CardItem key={index} data={card} />
        ))}
    </div>   
  </div>
</section>
    )
}

export default Events
