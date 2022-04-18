import React from 'react';

const Trainer = ({ trainer }) => {
    const { img, name } = trainer;
    return (
        <div className=' gx-5 col-sm-12 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example and best trainer for body building,crossfit and fitness content.</p>
            </div>
            </div>
        </div>
        
    );
};

export default Trainer;