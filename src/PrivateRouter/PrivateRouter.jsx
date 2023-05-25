import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRouter = ({children}) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loding) {
        return  <div className='text-center   container mx-auto  px-16 py-36 mt-16'>
            
            <progress className="progress w-56"></progress>
            <h1 className=' text-7xl'>Looding.....................</h1>
        </div>
    }

    if (user) {
        return children;

    }
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have no login',
        footer: 'Please First Login'
      })
    return <Navigate state={{ from: location }} to="/login"  replace />;
};

export default PrivateRouter;