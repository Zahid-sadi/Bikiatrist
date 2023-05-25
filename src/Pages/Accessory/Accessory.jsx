import React from "react";

const Accessory = ({accessory}) => {
    const {title, img, price} = accessory;
    return (
        <div>
            <div className="card  w-96 bg-base-100 shadow-xl my-7 mx-auto ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="servicePhoto" className="rounded-xl h-80" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-amber-400 text-lg font-weight: 700"> price $ {price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessory;
