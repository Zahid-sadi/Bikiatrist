import React from 'react';
import { Link } from 'react-router-dom';

const ServiceUi = () => {
    return (
       
        <div className="hero h-screen w-full bg-black m-0">
        <img
            className="h-screen w-full"
            src="https://previews.123rf.com/images/belyjmishka/belyjmishka1706/belyjmishka170600463/81125359-motorcycle-mechanic-replacing-and-pouring-fresh-oil-into-engine-at-maintenance-repair-service.jpg"
            alt=""
        />

       
            <div className="  mb-0 translate-y-full ">
                <p className=" text-xl font-bold mx-auto  p-10 text-neutral-content text-orange-500 ">We will be pleased</p>
                <Link to="/services" className="btn btn-block rounded-3xl bg-yellow-500 hover:bg-red-900 delay-500">
                    Get Access{" "}
                </Link>
                {/* <button className="btn btn-block">block</button> */}
            </div>
      
    </div>
    



    );
};

export default ServiceUi;