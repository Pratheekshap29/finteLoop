import React from "react";
import Header from './Header';
import Banner from './Banner';
import News from './News';
import Events from './Events';
import Projects from './Projects';
import Members from './Members';
import Footer from './Footer';


const Main = () => {
    return (
      <main>
        <section id="main">
          <Header />
          <Banner />
        </section>
        <News/>
        <Events/>
        <Projects/>
        <Members/>
        <Footer/>
      </main>
    );
};

export default Main;
