import React from "react";
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {_id,title,img,price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={img} alt="servicePhoto" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="text-amber-400 text-lg font-weight: 700"> price $  {price}</p>
                <div className="card-actions">
                   
                    <Link to={`/viewdetails/${_id}`}>
                    <button className="btn btn-primary">Check now</button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Service;
