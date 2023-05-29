import React, {useEffect, useState} from "react";

const OrderDetail = ({order,deleteHandler}) => {
    const {serviceName, _id, customer, price, email, message, service, phone} = order;
    console.log(order);
    const [ordered, setOrdered] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
        .then((res) => res.json())
        .then((data) => setOrdered(data));
    }, [service]);

    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=> deleteHandler(_id)} className="btn btn-ghost btn-xs">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-12 h-12">{ordered?.img && <img src={ordered.img} alt="ordered img" />}</div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-md text-yellow-600">$ {price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>{message}</td>
            <th>
                <button className="btn btn-ghost btn-xs"></button>
            </th>
        </tr>
    );
};

export default OrderDetail;
