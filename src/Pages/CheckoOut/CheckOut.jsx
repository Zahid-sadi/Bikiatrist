import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { authContext } from "../../Contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
    const {_id, price, title, } = useLoaderData()
    const {user} = useContext(authContext)

    const handleToOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        // const name = user?.firstName
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
        fetch('http://localhost:5000/orders',{
            method : 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                
                alert('order placed')
            }
        })
        
    }

    return (
        <form onSubmit={handleToOrder} className="text-center mx-5 ">
            <h2 className="text-info text-lg font-mono font-extrabold">Title: {title}</h2>
            <h5>Price : {price}</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-5">
                <input name="firstName" type="text" placeholder="First Name"  className="input input-bordered w-full" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full " />
                <input name="phone" type="" placeholder="Phone Number" className="input input-bordered  w-full" />
                <input name="email" type="email" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered w-full " />

            </div>
            
            <textarea name ='message' className="textarea textarea-warning my-4 w-full" placeholder="Details"></textarea>
            <input className="btn btn-success my-5" type="submit" value="place order" />
        </form>
    );
};

export default CheckOut;
