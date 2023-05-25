import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { authContext } from "../../Contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
    const {_id, email, price, title, } = useLoaderData()
    const {user} = useContext(authContext)

    const handleToOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.farstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered'
        const phone = form.phone.value;
        const message = form.message.value;


        const order = {
            service: _id,
            serviceName: title,
            price ,
            customer: name,
            email,
            phone,
            message,
        }
        
    }

    return (
        <div className="text-center mx-5 ">
            <h2 className="text-info text-lg font-mono font-extrabold">Title: {title}</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-5" action="">
                <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full " />
                <input name="phone" type="phone" placeholder="Phone Number" className="input input-bordered  w-full" />
                <input name="email" type="email" defaultValue={user?.email} placeholder="Your Number" className="input input-bordered w-full " />

            </form>
            
            <textarea name ='message' className="textarea textarea-warning my-4 w-full" placeholder="Details"></textarea>
        </div>
    );
};

export default CheckOut;
