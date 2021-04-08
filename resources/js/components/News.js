import React, { useEffect, useState } from "react";
// import $ from "jquery";
import axios from 'axios';

import { BASE_API } from "../config";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import {
    CContainer,
     CCol,
     CCard,
     CCardBody,
     CCardHeader,
     CRow
   } from '@coreui/react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const News = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    const [newArr, setNews] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_API}/newss`).then((res) => {
            setNews(res.data);
            console.log(res.data);
        });
    }, []);
    return (
        <section id="news">
            <h2 className="white-heading text-center">News</h2>
            
            <div>
        <Slider {...settings}>

        {newArr.map((news, index) => (

            <div>
            <CCard className="m-4">

            <CCardBody>
            <a href="/AllNews">{news.newshead}</a>
            </CCardBody>

            </CCard>
            </div>
        ))}
         
          
        </Slider>
      </div>

{/* <div className="news magenta">
	<span>Latest News</span>
	<ul>
    {newArr.map((news, index) => (
            
            <li><a href="/AllNews">{news.newshead}</a></li>
        ))}
		
		
	</ul>
</div> */}
            {/* <div className="holder ">
                <ul id="ticker01">
                    <li>
                        <span>10/10/2007</span>
                        <a href="#">
                            The first thing that most Javascript programmers
                        </a>
                    </li>
                    <li>
                        <span>10/10/2007</span>
                        <a href="#">End up doing is adding some code</a>
                    </li>
                    <li>
                        <span>10/10/2007</span>
                        <a href="#">The code that you want to run</a>
                    </li>
                    <li>
                        <span>08/10/2007</span>
                        <a href="#">
                            Inside of which is the code that you want to run
                        </a>
                    </li>
                    <li>
                        <span>08/10/2007</span>
                        <a href="#">Right when the page is loaded</a>
                    </li>
                    <li>
                        <span>05/10/2007</span>
                        <a href="#">
                            Problematically, however, the Javascript code
                        </a>
                    </li>
                    <li>
                        <span>04/10/2007</span>
                        <a href="#">
                            The first thing that most Javascript programmers
                        </a>
                    </li>
                    <li>
                        <span>04/10/2007</span>
                        <a href="#">End up doing is adding some code</a>
                    </li>
                    <li>
                        <span>04/10/2007</span>
                        <a href="#">The code that you want to run</a>
                    </li>
                    <li>
                        <span>03/10/2007</span>
                        <a href="#">
                            Inside of which is the code that you want to run
                        </a>
                    </li>
                    <li>
                        <span>03/10/2007</span>
                        <a href="#">Right when the page is loaded</a>
                    </li>
                    <li>
                        <span>01/10/2007</span>
                        <a href="#">
                            Problematically, however, the Javascript code
                        </a>
                    </li>
                </ul>
            </div> */}
        </section>
    );
};

export default News;
