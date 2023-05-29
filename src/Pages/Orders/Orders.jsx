import React, {useContext, useEffect, useState} from "react";
import {authContext} from "../../Contexts/AuthProvider/AuthProvider";
import OrderDetail from "../OrderDetail/OrderDetail";

const Orders = () => {
    const {user} = useContext(authContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setOrders(data);
        });
    }, [user?.email]);

    const deleteHandler = id =>{
 
        const proceed = window.confirm('its deleting')
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted');
                    const remaining = orders.filter(order=>order._id !== id);
                    setOrders(remaining)
                }
            })
        }
    }

    return (
      
        <div>
            <h2 className="text-5xl">You have {orders.length} Orders</h2>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>sarvice name / Price</th>
                            <th>customer / phone</th>
                            <th>details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <OrderDetail 
                            key={order._id} order={order}
                            deleteHandler={deleteHandler}
                            
                            ></OrderDetail>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
