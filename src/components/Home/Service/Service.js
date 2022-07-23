import React from 'react';
import {Link} from "react-router-dom";
import  './Service.css'
const Service = (props) => {

    const {_id, name, description,price, img} = props.service
    return (
        <div className="service pb-3">
            <h2>This is a Service: {name}</h2>
            <img style={{height: '400px', width: '400px'}} src={img} alt={description}/>
            <h5 className="py-2">Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className='btn btn-warning'>Book this {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;