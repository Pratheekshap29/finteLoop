import React, { useEffect, useState } from "react";
import { BASE_API } from "../config";
import axios from "axios";
import ProjectSlide from './ProjectSlide';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Projects() {

    const [projArr, setProjects] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_API}/projects`).then((res) => {
            setProjects(res.data);
            console.log(res.data);
        });
    }, []);

    // const projArr=[
    //     {
    //         title: 'Proj Title',
    //         desc: 'Proj Desc',
    //         imglink:'https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501',
    //         link: {
    //             title: 'link title',
    //             href: '/about'
    //         }
    //     },
    //     {
    //         title: 'Proj Title',
    //         desc: 'Proj Desc',
    //         imglink:'https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501',
    //         link: {
    //             title: 'link title',
    //             href: '/about'
    //         }
    //     },
    //     {
    //         title: 'Proj Title',
    //         desc: 'Proj Desc',
    //         imglink:'https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501',
    //         link: {
    //             title: 'link title',
    //             href: '/about'
    //         }
    //     },
    //     {
    //         title: 'Proj Title',
    //         desc: 'Proj Desc',
    //         imglink:'https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501',
    //         link: {
    //             title: 'link title',
    //             href: '/about'
    //         }
    //     },
    //     {
    //         title: 'Proj Title',
    //         desc: 'Proj Desc',
    //         imglink:'https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501',
    //         link: {
    //             title: 'link title',
    //             href: '/about'
    //         }
    //     },
    //     {
    //         title: 'Proj Title',
    //         desc: 'Proj Desc',
    //         imglink:'https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501',
    //         link: {
    //             title: 'link title',
    //             href: '/about'
    //         }
    //     },
    // ]
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
            items : 3,
            itemsDesktop:[1199,3],
            itemsDesktopSmall:[980,2],
            itemsMobile : [600,1],
            navigation:true,
            navigationText:["",""],
            pagination:true,
            autoPlay:true
        }
    }
    return (
        <section id="projects">
    <div className="responsive">
      <div className="container-fluid">
        <h2 className="text-center white-heading">Projects</h2>
        <div className="row">
          <div className="col-md-12">
            {/* <div id="news-slider" className="owl-carousel"> */}
            {projArr.length &&<OwlCarousel responsive={responsive} className='owl-theme' id="news-slider" loop margin={10} nav>
             {projArr.map((proj,index)=>(
                <ProjectSlide key={index} data={proj}/>
             ))}
              {/* </div> */}
              </OwlCarousel>}
          </div>
        </div>
      </div>
    </div>
  </section> 
    )
}

export default Projects
