import React from 'react';
import { FaClock, FaKey, FaLocationArrow, FaSun, FaUserClock } from 'react-icons/fa';

const Service = () => {
    return (
        <div>
            <div className=' text-center mt-11 mb-10'>
                <h1 className=' lg:text-6xl text-2xl text-cyan-400'>OUR <span className=' text-pink-300'>SERVICES</span> </h1>
            </div>
        <div className=' bg-cyan-400 py-20 border-white text-slate-50 text-center'>
            <div className=' lg:flex justify-between gap-6  container mx-auto'>
                <div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <FaClock className=' lg:text-6xl text-3xl text-center mx-auto'></FaClock>
                    </div>

                    <h1 className=' lg:text-3xl font-bold text-pink-300 pt-5 pb-3'>Fast Delivery</h1>
                    <p>Find tracking information and order details from Your Orders.

                    </p>
                </div>
                <div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <FaKey className=' text-6xl text-center mx-auto'></FaKey>

                    </div>
                    <h1 className=' lg:text-3xl font-bold text-pink-300 pt-5 pb-3'>Save Money</h1>
                    <p>Save $5 every year compared to the monthly plan by paying yearly.

                    </p>

                </div>
                <div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <FaLocationArrow className=' text-6xl text-center mx-auto '></FaLocationArrow>

                    </div>

                    <h1 className=' lg:text-3xl font-bold text-pink-300 pt-5 pb-3'>Fast Returns</h1>
                    <p>Money back. If the item didn’t suit you</p>

                </div>
                <div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <FaSun className=' text-6xl text-center  mx-auto'></FaSun>

                    </div>
                    <h1 className=' lg:text-3xl font-bold text-pink-300 pt-5 pb-3'>Online Support</h1>
                    <p>Use our 24/7 customer hotline so you’re not alone if you have a question</p>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Service;