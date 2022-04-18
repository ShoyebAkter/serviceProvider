import React from 'react';
import mypic from '../../trainers/mypic.jpg'

const About = () => {
    return (
        <div id='about'>
            <img src={mypic} alt=''></img>
            <p>This is about Shoyeb Akter</p>
        </div>
    );
};

export default About;