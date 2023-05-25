import React, {useEffect, useState} from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    return (
        <div>
            <div className="mx-5 text-center ">
                <h2  className="text-lime-400 font-extrabold ">We provide best service in our capacity</h2>
                <p className="text-center text-green-900">service is our  responsiblity so that you can utilise your valubale time money and everything</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
