import React from 'react';
import trainer1 from '../../../trainers/trainer1.jpg'
import trainer2 from '../../../trainers/trainer2.jpg'
import trainer3 from '../../../trainers/trainer3.png'
import Trainer from '../Trainer/Trainer'

const trainers=[
    {id:1,name:"James",img:trainer1},
    {id:2,name:"Nicholas",img:trainer2},
    {id:3,name:"Anderson",img:trainer3}
]
const Trainers = () => {
    return (
        <div className='container'>
            <h4 className='text-warning'>Train the experts</h4>
            <h1 className='text-light my-0'>Meet the trainers</h1>
            <div className='row'>
                {
                    trainers.map(trainer=> <Trainer
                    key={trainer.id}
                    trainer={trainer}
                    >
                    </Trainer>)
                }
            </div>
        </div>
    );
};

export default Trainers;