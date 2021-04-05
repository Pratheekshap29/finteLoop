import React, { useEffect, useState } from "react";
// import $ from "jquery";
import axios from 'axios';
import { BASE_API } from "../config";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const News = () => {

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
            

<div className="news magenta">
	<span>Latest News</span>
	<ul>
    {newArr.map((news, index) => (
            
            <li><a href="/AllNews">{news.newshead}</a></li>
        ))}
		
		
	</ul>
</div>
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
