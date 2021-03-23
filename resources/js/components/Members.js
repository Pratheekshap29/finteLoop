import React from 'react'
import Member from './Member'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Members = () => {
const membArr=[
    {
        name:'name',
        project:'title',
        skills:'skills',
        usn:'usn',
        branch:'branch',
        img:'https://picsum.photos/130/130?image=1027'
    },
    {
        name:'name',
        project:'title',
        skills:'skills',
        usn:'usn',
        branch:'branch',
        img:'https://picsum.photos/130/130?image=1027'
    },
    {
        name:'name',
        project:'title',
        skills:'skills',
        usn:'usn',
        branch:'branch',
        img:'https://picsum.photos/130/130?image=1027'
    },
    {
        name:'name',
        project:'title',
        skills:'skills',
        usn:'usn',
        branch:'branch',
        img:'https://picsum.photos/130/130?image=1027'
    },
    {
        name:'name',
        project:'title',
        skills:'skills',
        usn:'usn',
        branch:'branch',
        img:'https://picsum.photos/130/130?image=1027'
    },
    {
        name:'name',
        project:'title',
        skills:'skills',
        usn:'usn',
        branch:'branch',
        img:'https://picsum.photos/130/130?image=1027'
    }
    
]



    const responsive ={
        // breakpoint from 0 up
        0 : {
            items: 1,

        },
        // breakpoint from 480 up
        480 : {
            items : 1,
            
        },
        // breakpoint from 768 up
        768 : {
            items: 3,
            itemsDesktop:[1000,3],
            itemsDesktopSmall:[979,2],
            itemsTablet:[768, 2],
            itemsMobile:[650, 1],
            pagination: true,
            autoPlay: true
        }
    }
    return (
        <section id="memebers">
    <div className="demo">
      <div className="container">
        <h2 className="text-center">Members</h2>
        <div className="row">
          {/* <div id="testimonial-slider" className="owl-carousel"> */}
          <OwlCarousel resposive={responsive} className='owl-theme' id="testimonial-slider"  nav>

          {membArr.map((membArr,index)=>(
                <Member key={index} data={membArr}/>
             ))}
            
            {/* </div> */}
            </OwlCarousel>
          </div>
        </div>
      </div>
  </section>
    )
}

export default Members;
