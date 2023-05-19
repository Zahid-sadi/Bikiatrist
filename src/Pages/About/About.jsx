import React from "react";
import img1 from '../../assets/Images/banner/parts7.png'

const About = () => {
    return (
        <div className="hero my-20 bg-gray-900">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/2">
                <img src={img1}
                    alt=""
                    className=" h-66 rounded-lg shadow-2xl"
                />
                </div>
                
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold">who we are</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;
