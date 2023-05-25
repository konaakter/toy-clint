import React from 'react';
import logo1 from '../../../img/photo/1-removebg-preview.png'
import logo2 from '../../../img/photo/2-removebg-preview.png'
import logo3 from '../../../img/photo/12_prev_ui.png'
import logo4 from '../../../img/photo/13jpg_prev_ui.png'
import Marquee from "react-fast-marquee";
const Gally = () => {
    return (
       
        <div className=' my-32 container mx-auto '> 
        <h1 className=' lg:text-5xl text-2xl font-semibold text-cyan-400 text-center mb-16'> PHOTO GE
        <span className=' text-pink-300'>LLARY</span></h1>
             <Marquee pauseOnHover speed={200} delay={12}>
            
                <div>
                    <img className=' h-48 me-11' src={logo1} alt="" />
                </div>
                <div>
                    <img className=' h-48 me-11' src={logo2} alt="" />

                </div>
                <div>
                    <img className=' h-48 me-11' src={logo3} alt="" />

                </div>
                <div>
                    <img className=' h-44' src={logo4} alt="" />

                </div>
            </Marquee>
            </div>
    );
};

export default Gally;