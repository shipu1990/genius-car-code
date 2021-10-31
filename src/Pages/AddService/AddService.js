import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      axios.post('http://localhost:5000/services', data)
      .then(res => {
          if(res.data.insertedId){
              alert('Added Data Successfully');
              reset();
          }
      })
    };

    return (
        <div className="add-service">
            <h2>Add Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", {required: true , maxLength:30 })}  placeholder="Name" />
                <input {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Img URL" />
                <textarea {...register("description", { required: true })} placeholder="description" />
                <input type="submit" />
                </form>
        </div>
    );
};

export default AddService;