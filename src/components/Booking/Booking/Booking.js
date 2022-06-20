import React from 'react';
import {useParams} from "react-router-dom";

const Booking = () => {

    const {serviceId} = useParams()
    return (
        <div>
            <h2>Booking id {serviceId}</h2>
        </div>
    );
};

export default Booking;