import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Slider from "./Slider.jsx";

export default function Layout(){
    return(
        <div className="site-wrapper">
          <Header />
           <main>
              <Outlet />
           </main>
          <Footer />
        </div>
    )
}
