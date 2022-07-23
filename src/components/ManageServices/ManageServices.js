import React, {useEffect, useState} from 'react';
import data from "bootstrap/js/src/dom/data";
import axios from "axios";


const ManageServices = () => {

    const [services, setService] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    },[])

    const handleRemove = id => {
        const url = `http://localhost:5000/services/${id}`

        axios.delete(url)
            .then(response => {
                if (response.data.deletedCount) {
                    window.alert('successfully deleted')

                    const remainingUser = services.filter(service=> service._id !== id)
                    setService(remainingUser)
                }
            })
    }
    return (
        <div>
            <h1>Manage Services</h1>
            {
                services.map(service =><div key={service._id}>

                    <h3>{service.name}</h3>
                    <button onClick={ () => handleRemove(service._id)}>Remove</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;