import React from 'react';
import { Link } from 'react-router-dom';

const ContactUi = () => {
    return (
        <div className="hero h-screen w-screen bg-black m-0">
        <img
            className="h-screen w-full"
            src="https://images.hdqwalls.com/wallpapers/mv-agusta-australia-800-fx.jpg"
            alt=""
        />

       
            <div className="mb-0 translate-y-full ">
                <p className=" text-xl font-bold mx-auto  p-10 text-neutral-content text-orange-500 ">We will be pleased if you know us</p>
                <Link to="/services" className="btn btn-block rounded-3xl bg-yellow-500 hover:bg-red-900 delay-500">
                    Get Access{" "}
                </Link>
            </div>
      
    </div>
    );
};

export default ContactUi;