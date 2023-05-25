import React, {useEffect, useState} from "react";
import Accessory from "../Accessory/Accessory";

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        fetch("accessories.json")
        .then((res) => res.json())
        .then((data) => setAccessories(data));
    }, []);

    return (
       <div>
         <div>
                <div className="mx-10 text-center ">
                    <h2>purchase from us</h2>
                    <p>we sale our responsiblity so that you can utilise your valubale time money and everything</p>
                </div>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4">
                {accessories.map((accessory) => (
                    <Accessory key={accessory._id} accessory={accessory}></Accessory>
                ))}
            
        </div>
       </div>
    );
};

export default Accessories;
