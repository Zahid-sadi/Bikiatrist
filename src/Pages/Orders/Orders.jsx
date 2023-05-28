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

    return (
        <div>
            <h2> You HAVE placed {orders.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Image/Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>

            {orders.map((order) => (
                <OrderDetail 
                 key={order._id} 
                 order={order}
                ></OrderDetail>
            ))}
        </div>
    );
};

export default Orders;
