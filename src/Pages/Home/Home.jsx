import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import BannerUi from "../../UiComponents/BannerUi/BannerUi";
import AboutUi from "../../UiComponents/AboutUi/AboutUi";
import ServiceUi from "../../UiComponents/ServiceUi/ServiceUi";
import ProductsUi from "../../UiComponents/ProductsUi/ProductsUi";

const Home = () => {
    return (
        <div>
           
           
            
           
            <div className="h-screen w-screen carousel carousel-vertical">
                <div className="carousel-item h-screen w-screen">
               <BannerUi></BannerUi>
                </div>
                <div className="carousel-item h-screen w-screen">
                <AboutUi></AboutUi>
                </div>
                <div className="carousel-item h-screen w-screen">
                <ServiceUi></ServiceUi>
                </div>
                <div className="carousel-item h-screen w-screen">
                <ProductsUi></ProductsUi>
                </div>
               
            </div>
        </div>
    );
};

export default Home;
