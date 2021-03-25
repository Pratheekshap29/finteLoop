import React, { useEffect, useState } from "react";
import { BASE_API } from "../config";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import Member from './Member';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//
const Members = () => {
    const [membArr, setMembers] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_API}/members`).then((res) => {
            setMembers(res.data);
            console.log(res.data);
        });
    }, []);

    const responsive = {
        // breakpoint from 0 up
        0: {
            items: 1,
        },
        // breakpoint from 480 up
        480: {
            items: 1,
        },
        // breakpoint from 768 up
        768: {
            items: 3,
            itemsDesktop: [1000, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile: [650, 1],
            pagination: true,
            autoPlay: true,
        },
    };
    return (
        <section id="members">
            <div className="demo">
                <div className="container">
                    <h2 className="text-center white-heading">Members </h2>
                    <div className="row">
                        {/* <div id="testimonial-slider" className="owl-carousel"> */}
                        {membArr.length && <OwlCarousel
                            resposive={responsive}
                            className="owl-theme"
                            id="testimonial-slider"
                            loop
                            margin={10}
                            nav>
                            {membArr.map((memb) => (
                                <Member data={memb} />
                            ))}
                            {/* </div> */}
                        </OwlCarousel>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Members;
