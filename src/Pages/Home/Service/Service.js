import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id,name,price,img,description}=service;
    const navigate=useNavigate();

    const navigateHandle= id=>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <img src={img} alt=""/>
            <h2>Service: {name}</h2>
            <p>{description}</p>
            <h4>Price:$ {price}</h4>
            <button onClick={()=>navigateHandle(id)} className='button'>Book {name}</button>
        </div>
    );
};

export default Service;