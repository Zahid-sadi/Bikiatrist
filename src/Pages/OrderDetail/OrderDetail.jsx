import React, { useEffect, useState } from 'react';

const OrderDetail = ({order}) => {
    const {serviceName,customer,price, email, message, service, phone  } = order ;
    console.log(order);
    const [ordered, setOrdered] = useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=> res.json())
        .then(data =>setOrdered(data))
    },[service])

    return (
        
    
        
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className=" rounded w-24 h-24">
                              
                                {
                                    ordered?.img &&
                                    <img src={ordered.img} alt='ordered img' />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{price}</span>
                </td>
               
                <th>
                    <button className="btn btn-ghost btn-xs"></button>
                </th>
            </tr>
        
   
    );
};

export default OrderDetail;