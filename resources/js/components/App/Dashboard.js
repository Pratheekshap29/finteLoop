import React from 'react'
import reportWebVitals from './reportWebVitals';
import {Bar} from 'react-chartjs-2';


function Dashboard() {

    // const dashStyle={
    //    backgroundColor:'#8621F8'
    // } ;

    const state = {
    
       
        type: 'bar',
        scaleFontColor: 'red',
labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
datasets: [
  {
    label: 'users',
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(153, 106, 255, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(100, 102, 255, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(156, 102, 200, 0.2)',
    ],
    borderColor:  [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 106, 255, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(100, 102, 255, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(156, 102, 200, 1)',
    ],
    borderWidth: 3,
    data:[50, 19, 3, 5, 2, 3, 18,50,65,90 ,45,78],
    options: {
        scales: {
            yAxes: [{
                  
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  }
]
}
    return (
        <div>

<section className="stats" id="statis">
                <div className="content-box">
                    <br />
                    <br />
                    <div className="container" style={{ paddingRight: "50px" }}>
                        <div className="blog">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-3 col-sm-3">
                                        <div class="statis-items">
                                            <i
                                                className="fa fa-users"
                                                aria-hidden="true"
                                            ></i>
                                            <h2>
                                                <span className="counter text-center">
                                                    35
                                                </span>
                                                <span>+</span>
                                            </h2>
                                            <p>members</p>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-3">
                                        <div className="statis-items">
                                            <i
                                                className="fa fa-bullhorn"
                                                aria-hidden="true"
                                            ></i>
                                            <h2>
                                                <span className="counter text-center">
                                                    15
                                                </span>
                                                <span>+</span>
                                            </h2>
                                            <p>news</p>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-3">
                                        <div className="statis-items">
                                            <i
                                                className="fa fa-calendar"
                                                aria-hidden="true"
                                            ></i>
                                            <h2>
                                                <span className="counter text-center">
                                                    16
                                                </span>
                                                <span>+</span>
                                            </h2>
                                            <p>events</p>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-3">
                                        <div className="statis-items">
                                            <i
                                                className="fa fa-book"
                                                aria-hidden="true"
                                            ></i>
                                            <h2>
                                                <span className="counter text-center">
                                                    20
                                                </span>
                                                <span>+</span>
                                            </h2>
                                            <p>projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">

<canvas id="myChart" ></canvas>
</div>

<Bar
  data={state}
  options={{
    title:{
      display:true,
      text:'No of users',
      fontSize:20
    },
    legend:{
      display:true,
      position:'right'
    }
  }}
/>
        </div>
    )
}

export default Dashboard
