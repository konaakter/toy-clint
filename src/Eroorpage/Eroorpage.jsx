import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/error.json";



const Eroorpage = () => {

    const {error, status} = useRouteError()
    return (
        <div>

            <div className=' text-center'>
                <div className=' w-7/12 mx-auto'>
                <Lottie animationData={groovyWalkAnimation} loop={true} />

                </div>
                <Link  to='/' className='rounded-md button-primary  text-white bg-cyan-600 p-5'>
                                Back to Home
                </Link>

            </div>
        </div>
    );
};

export default Eroorpage;


/*
<section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                    <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                        
                        <div className='max-w-md text-center'>
                            <h2 className='mb-8 font-extrabold text-9xl text-blue-900'>
                                <span className='sr-only'>Error</span>
                                {status || 404}
                            </h2>
                            <p className='text-2xl font-semibold md:text-3xl text-green-700 mb-8'>
                                {error?.message}
                            </p>
                            <Link to='/' className='rounded-md button-primary p-3 text-white'>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </section>*/