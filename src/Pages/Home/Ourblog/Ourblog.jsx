import React from 'react';

import logo1 from '../../../img/photo1/kids-gd424ffa8b_640.jpg'
import logo2 from '../../../img/photo1/thomas-and-friends-g12083ae06_640.jpg'

const Ourblog = () => {
    return (
        <div className=' my-20 overflow-hidden'>
            <h1 className=' lg:text-5xl text-2xl text-pink-400 text-center mb-14'> OUR <span className=' text-cyan-400'> BL</span>OG</h1>
            <div className=' container mx-auto'>
                <div className=' lg:flex lg:flex-row gap-11 '>
                    <div className=' lg:flex gap-8'>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <img className='' src={logo1} alt="" />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="3000">
                            <img src={logo2} alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500" className=' my-auto  '>
                        < h1 className=' lg:text-5xl lg:mt-1 mt-9 text-xl font-semibold mb-8 text-pink-300 text-center'>A faster and better <br />
                            <span className=' text-cyan-400 '> way to s</span>hop</h1>

                        <p className=' lg:ms-1 ms-8'>Our team of experts are here to help guide you through <br />  making  bdecisions. You can order online and don’t worry about delivery. The orders always arrive on time.

                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Ourblog;