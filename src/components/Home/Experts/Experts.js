import React from 'react';
import Expert from "../Expert/Expert";


const ourExperts = [

    {
        id: 1,
        img: 'https://i.ibb.co/gjgWVDV/pexels6.jpg',
        name: 'mohamed abdelghaffar',
        exprtizer: '-Engine Expert-'
    },
    {
        id: 2,
        img: 'https://i.ibb.co/MDc43Yd/pexels5.jpg',
        name: 'Hiren Lad',
        exprtizer: '-Polish Expert-'
    },
    {
        id: 3,
        img: 'https://i.ibb.co/R6hC2Jf/pexels4.jpg',
        name: 'Juan Vargas',
        exprtizer: '-All rounder Expert-'
    },
    {
        id: 4,
        img: 'https://i.ibb.co/mNf26S6/pexels3.jpg',
        name: 'jan valle',
        exprtizer: '-Coloring Expert-'
    }
]
const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className='row'>
                {
                    ourExperts.map(ex => <Expert key={ex.id} expert={ex}/>)
                }
            </div>
        </div>
    );
};

export default Experts;