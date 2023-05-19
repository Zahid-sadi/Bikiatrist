import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

  useEffect(()=>{
    fetch('service.json')
    .then(res => res.json())
    .then(data => setServices(data))
  } ,[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4'>

            {
                services.map(service => <Service
                key={service._id}
                service = {service}
                ></Service>)
            }
        </div>
    );
};

export default Services;