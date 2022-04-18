import React from 'react';
import mypic from '../../trainers/myself.jpg'

const About = () => {
    return (
        <div className=' gx-5 col-sm-12 col-lg-4 mx-auto'>
            <div className="card" style={{ width: "100%" }}>
            <img src={mypic} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">My name is Shoyeb AKter</h5>
                <p className="card-text">I am a student.I live in Chittagong but I am studying at Saidpur
                in an University named BAUST.I love Web development and I love to work in this field.</p>
            </div>
            </div>
        </div>
    );
};

export default About;