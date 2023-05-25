import React from "react";
import {useLoaderData} from "react-router";
import {Link} from "react-router-dom";

const ViewDetails = () => {
    const {title, description, img, price, _id} = useLoaderData();
    return (
        <div>
            <h3 className="text-center text-5xl font-extrabold text-orange-500">Name: {title}</h3>
            <div className=" mx-5 my-5 flex ">
                <img className="mx-auto h-full w-1/2" src={img} alt="" />
                <div className="m-5 p-4 h-full w-1/2">
                    <p className="m-5">{description}</p>
                    <Link className="btn btn-info m-5" to={`/checkout/${_id}`}>
                        {" "}
                        Proceed CheckOut{" "}
                    </Link>
              
                <h4 className="m-5 text-warning font-extrabold">Price : ${price}</h4>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
