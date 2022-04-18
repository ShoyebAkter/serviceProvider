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
        <div id='feedback' className='container'>
            <h4 className='text-warning'>Feedback of the trainer</h4>
            <h1 className='text-dark my-0'>Who took training from the trainer</h1>
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