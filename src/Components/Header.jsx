import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  color:"chocolate"
}
    return(
        <header className={isSticky ? 'sticky' : ''}>
          <Link to="/"> <img src="/Assets/img/logo.jpg" className="logo-img" /></Link>
          <nav>
            <NavLink to="/host" style={({isActive}) => isActive ? activeStyle : null} >Host</NavLink>
            <NavLink to="/about"  style={({isActive}) => isActive ? activeStyle : null} >About</NavLink>
            <NavLink to="/vans"  style={({isActive}) => isActive ? activeStyle : null} >Vans</NavLink>
          </nav>
        </header>
    )
}