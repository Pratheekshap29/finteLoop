import React from 'react';
import CardItem from './CardItem';

function Events() {
    const cardArr=[
        {
            title: 'Card Title',
            desc: 'Card Desc',
            link: {
                title: 'link title',
                href: '/about'
            }
        },
        {
            title: 'Card Title',
            desc: 'Card Desc',
            link: {
                title: 'link title',
                href: '/about'
            }
        },
        {
            title: 'Card Title',
            desc: 'Card Desc',
            link: {
                title: 'link title',
                href: '/about'
            }
        },
    ]
    return (
  <section id="events">
  <div className="container pb-5">
    <h2 className="text-center">Events</h2>
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
