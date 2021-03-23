import { Dropdown } from "bootstrap";
import React, {useEffect, useRef, useState} from "react";

function Header() {
    const ref = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    // const [opacity, setOpacity] = useState(0);
 
    useEffect(() => {
        const navHeight = ref.current.offsetHeight;
        const navGroup=ref.current.querySelector('.nav-group');
        const navOrigPadding = 50;
        const minNavPadding = 5;
        console.log(navOrigPadding);
        const handleScroll = () => {
            const windowScroll = window.pageYOffset;
            if (navHeight && windowScroll < navHeight) {
                const padding = navOrigPadding - windowScroll/2
                let newPadding = padding >= minNavPadding ? padding : minNavPadding;
                newPadding = newPadding > navOrigPadding ? navOrigPadding : newPadding;
                const opacity = 1-(newPadding-minNavPadding)/(navOrigPadding-minNavPadding);
                const newOpacity = opacity >= 1 ? 1 : opacity;
                console.log(newOpacity);
                ref.current.style.backgroundColor= `rgba(256, 256, 256, ${newOpacity})`;
                // navGroup.style.padding=`${newPadding}px`;
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        }
    }, [])


  const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
  }

    return (
        <nav id="nav" ref={ref}>
            <div className="brand nav-group">Brand</div>
            <div className="menus nav-group" style={{top: showDropdown?0:'-200vh'}}>
                <div className="hamburger" onClick={toggleDropdown}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <a className="menu-item" href="#news">
                    News
                </a>
                <a className="menu-item" href="#projects">
                    Projects
                </a>
                <a className="menu-item" href="#events">
                    Events
                </a>
                <a className="menu-item" href="#footer">
                    Contact
                </a>
            </div>
            <div className="hamburger nav-group"  onClick={toggleDropdown}>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Header;
