import React from "react";
import Banner from "../../Pages/Banner/Banner";
import { Link } from "react-router-dom";

const BannerUi = () => {
    return (
        <div className="hero h-screen w-screen cursor-auto ">
          <Banner className=" "></Banner>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content  text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-extrabold font-serif">Just Ride</h1>
                 
                    <Link
                        to="/products"
                        className=" animate-bounce btn btn-block bg-transparent rounded-3xl hover:bg-gradient-to-r from-orange-400 via-yellow-600 to-red-700 ... delay-500"
                    >
                        Get Access{" "}
                    </Link>{" "}
                </div>
            </div>
        </div>
    );
};

export default BannerUi;
