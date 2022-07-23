import React from 'react';
import {useForm} from "react-hook-form"
import axios from "axios";
import './AddServices.css'

const AddServices = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(result => {

               if (result.data.insertedId) {
                   window.alert('user inserted')
                   reset()
               }
            })
    }
    return (
        <div className="addServices">
            <h2>Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", {required: true, maxLength: 20})} placeholder='Name'/>
                <textarea {...register("description",)} placeholder='Description'/>
                <input type="number" {...register("price",)} placeholder='Price'/>
                <input {...register("img",)} placeholder='Image url'/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddServices;