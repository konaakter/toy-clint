import React from 'react';
import { Link } from 'react-router-dom';

const Scincetab = ({data }) => {

    const {_id,name, photo, rating, price} = data
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className=' space-y-2 shadow-2xl p-6'>

            <img className=' w-60' src={photo} alt="" />
            <h1 className=' pt-6'>Name: {name}</h1>
            <p>Price: {price}</p>
            <p>Rataing: {rating}</p>
            <Link to={`/tabone/${_id}`}><button className='bg-pink-300 px-5 py-2 mt-3  text-white  rounded'>Veiws
             more</button></Link>
            

            

        </div>
    );
};

export default Scincetab;