import React from 'react';
import { Link } from 'react-router-dom';

const ProductsUi = () => {
    return (
        <div className="hero h-screen w-full bg-black m-0">
        <img
            className="h-screen w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMyquFsfX1V1rvI7llgmbNUhnjwgkP6-QBg&usqp=CAU"
            alt=""
        />

       
            <div className="mb-0 translate-y-full ">
                <p className=" text-xl font-bold mx-auto  p-10 text-neutral-content text-orange-500 ">Product we sell</p>
                <Link to="/accessories" className="btn btn-block rounded-3xl bg-yellow-500 hover:bg-red-900 delay-500">
                    Get Access{" "}
                </Link>
            </div>
      
    </div>
    );
};

export default ProductsUi;