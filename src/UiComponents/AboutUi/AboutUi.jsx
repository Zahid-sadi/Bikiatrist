import React from "react";
import {Link} from "react-router-dom";

const AboutUi = () => {
    return (
        <div className="hero h-screen w-screen bg-black m-0">
            <img
                className="h-screen w-full"
                src="https://media.istockphoto.com/id/1091317856/photo/stylish-vintage-hobby-motorcycle-garage-workshop.jpg?s=612x612&w=0&k=20&c=WID-qXf6U4bPGOFupJA_-k77hjxSoIpt54OvpPzW8mY="
                alt=""
            />

           
                <div className="mb-0 translate-y-full ">
                    <p className=" text-xl font-bold mx-auto  p-10 text-neutral-content text-orange-500 ">We will be pleased if you know us</p>
                    <Link to="/services" className="btn btn-block rounded-3xl bg-yellow-500 hover:bg-red-900 delay-500">
                        Get Access{" "}
                    </Link>
                    {/* <button className="btn btn-block">block</button> */}
                </div>
          
        </div>
    );
};

export default AboutUi;
