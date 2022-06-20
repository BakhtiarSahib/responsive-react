import React from 'react';

const Expert = (props) => {

    const {name, img, exprtizer} = props.expert
    return (
        <div  className="col-lg-4  col-sm-6 col-12 m-1">

            <img style={{height: '300px', width: '300px'}} src={img} alt={exprtizer}/>
            <h3> {name}</h3>
            <h5 className='text-danger'>{exprtizer}</h5>
        </div>
    );
};

export default Expert;