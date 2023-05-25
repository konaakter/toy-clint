import React from 'react';
import logo from '../../img/logo1.png'
import { FaBeer, FaFacebookF, FaInstagram, FaPhone, FaTwitter, FaHouzz, FaRegEnvelope } from 'react-icons/fa';


const Fotter = () => {
    return (
        <div className='bg-pink-300'>
            <div className='bg-cyan-400 border rounded-tl-full'>
                <div className='container mx-auto'>
                    <footer className="footer p-10  text-white ">
                        <div>
                            <img className=' h-28 w-1/2' src={logo} alt="" />

                            <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                            <div className='flex items-center mt-4 space-x-5'>
                                <FaFacebookF className=' text-4xl text-pink-300 bg-white p-2 rounded-full'></FaFacebookF>

                                <FaTwitter className=' text-4xl text-pink-300 bg-white p-2 rounded-full'></FaTwitter>
                                <FaPhone className=' text-4xl text-pink-300 bg-white p-2 rounded-full'></FaPhone>
                                <FaInstagram className=' text-4xl text-pink-300 bg-white p-2 rounded-full'></FaInstagram>

                            </div>
                        </div>
                        <div>
                            <span className="footer-title">Contract Us</span>
                            <div className='flex space-x-2'>
                                < FaHouzz className=' text-xl'></FaHouzz>
                                <a className="link link-hover">  Address goes here </a>
                            </div>
                            <div className='flex space-x-2'>
                                <FaRegEnvelope className=' text-xl'></FaRegEnvelope>
                                <a className="link link-hover">Design</a>
                            </div>
                            <div className='flex space-x-2'>
                                <FaPhone className=' text-xl'></FaPhone>
                                <a className="link link-hover">01457934667</a>

                            </div>

                        </div>
                        <div>
                            <span className="footer-title">Company</span>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                        <div>
                            <span className="footer-title">Information</span>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                    </footer>


                </div>


            </div>
           
           <div className='bg-pink-300 text-white text-center py-5'>
            <h1 className=' text-xl'>Copyright © 2022 HasThemes | Built with Toyqo by HasThemes.</h1>
           </div>
        </div>
    );
};

export default Fotter;