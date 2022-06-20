import React from 'react';

import notFound from '../NotFound/../../images/error-404.jpg'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <img style={{width: '100%'}} src={notFound} alt=''/>
            <Link to='/'>
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;