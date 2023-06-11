import React from "react";
import BannerUi from "../../UiComponents/BannerUi/BannerUi";
import AboutUi from "../../UiComponents/AboutUi/AboutUi";
import ServiceUi from "../../UiComponents/ServiceUi/ServiceUi";
import ProductsUi from "../../UiComponents/ProductsUi/ProductsUi";
import ContactUi from "../../UiComponents/ContactUi/ContactUi";
import FooterUi from "../../UiComponents/FooterUi/FooterUi";

const Home = () => {
    return (
        <div>
           <div className="h-screen w-screen carousel carousel-vertical">
              
                <div className="carousel-item h-screen w-full overflow-hidden">
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
                <div className="carousel-item h-screen w-screen">
                <ContactUi></ContactUi>
                </div>
                <div className="carousel-item h-screen w-screen">
                <FooterUi></FooterUi>
                </div>
                
               
            </div>
        </div>
    );
};

export default Home;
