import React from "react";
import {Link} from "react-router-dom";
import imgContact from "../../assets/Images/banner/bike2.jpg"

const ContactUi = () => {
    return (
        <div className="hero h-screen w-screen">
            <img
                className="h-screen w-full overflow-hidden"
                src={imgContact}
                alt=""
            />
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content  text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-extrabold font-serif">Contact With Us</h1>
                    <p className="mb-5">
                        
                    </p>
                    <Link
                        to="/contact"
                        className=" animate-bounce btn btn-block bg-transparent rounded-3xl border-2 border-b-indigo-600 hover:bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 ... delay-500"
                    >
                        Push the door {" "}
                    </Link>{" "}
                </div>
            </div>
        </div>
    );
};

export default ContactUi;
