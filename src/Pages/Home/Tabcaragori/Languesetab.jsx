import React, { useContext, useEffect, useState } from 'react';
import Modal from '../../Modal/Modal';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/Authprovider';

const Languesetab = ({ data }) => {






    const { _id, name, photo, rating, price } = data
    const { user } = useContext(AuthContext)


    return (
        <div className=' space-y-2 p-6  shadow-2xl '>

            <img  className=' w-60 ' src={photo} alt="" />
            <h1 className=' pt-6'>Name: {name}</h1>
            <p>Price: {price}</p>
            <p>Rataing: {rating}</p>
            
                


                 <Link to={`/tabone/${_id}`}><button className='bg-pink-300 px-5 py-2 mt-3  text-white  rounded'>Veiws
                        more</button></Link>
            





        </div>
    );
};

export default Languesetab;