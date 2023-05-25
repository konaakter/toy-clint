import React from 'react';
import { useLoaderData } from 'react-router-dom';
import usetitle from '../../Hooktitle/usetitle';


const Veiwsdetails = () => {
    usetitle("Data-Details")

    const loder = useLoaderData()
    const { photo, name, price, rating, details } = loder
    return (
        <div className=' container mx-auto'>
            <div className=''>
                <div className="card card-side bg-cyan-400 shadow-xl mt-32 mb-48 border-4 border-pink-400 ">
                    <img className='  p-10' src={photo} alt="Movie" />
                    <div className=' my-auto'>
                        <h2 className="card-title mb-4">{name}</h2>
                        <p className=' mb-4'>{details}</p>
                        <div className=' flex space-x-10 mb-6'>
                            <p> Rating: {rating}</p>
                            <p>Price: {price}</p>
                        </div>
                        <div className="card-actions ">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Veiwsdetails;