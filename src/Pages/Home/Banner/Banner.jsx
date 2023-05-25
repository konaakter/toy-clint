import React from 'react';
import logo from '../../../img/gil1.png'

const Banner = () => {
    return (
        <div className='banar'>
            <div className='  lg:flex lg:flex-row gap-10 container mx-auto'>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <img className='lg:h-screen h-64 w-full	' src={logo} alt="" />
                </div>
                <div className=' my-auto'>
                    <div  data-aos="fade-up" data-aos-duration="3000">
                        <h1 className="lg:text-6xl text-2xl lg:pb-10 pb-2 text-white">PICK <span className=' text-cyan-400'>T</span><span className='text-white'>H</span><span className=' text-pink-300'>E</span> BEST TOY <br /> <span className='text-pink-300'>FOR YOU</span>  KIDS</h1>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="3000">
                        <p className='lg:text-3xl text-xl text-white '>Make play time a blast with  your <br /> finest <span className=' text-pink-400'> toys and games</span> </p>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="3000">
                        <button 
                        className='bg-pink-300  lg:px-9 px-2 py-3 lG:mt-9 mt-2 border-2 w-full text-white
                         border-white rounded'>Pick up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;