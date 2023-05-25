import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import usetitle from '../../Hooktitle/usetitle';

const Updatetoy = () => {
    usetitle('UpdateToy')


    const [emailFocused, setEmailFocused] = useState(false);

    const handleEmailFocus = () => {
        setEmailFocused(true);
    };

    const handleEmailBlur = () => {
        setEmailFocused(false);
    }
    const updateloder = useLoaderData()
    const { _id } = updateloder



    const tohandleaddy = event => {
        event.preventDefault();

        const form = event.target;
        const quantity = form.quantity?.value;
        const details = form.details?.value;
        const price = form.price?.value;


        const addtoy = { quantity, price, details }
        console.log(addtoy)

        fetch(`https://toy-kona-server.vercel.app/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addtoy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'This Toy Will be Edit',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                }
            })


    }
    return (


        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
                <div className="py-8 px-12 bg-cyan-400 border-4 border-pink-300">
                    <h2 className="text-2xl font-bold text-center text-white mb-4">EDIT OPTOIN</h2>
                    <form onSubmit={tohandleaddy}>
                        <div className="mb-6">
                            <label 
                                className={`block text-white text-sm font-bold mb-2 transition-transform ${emailFocused ? 'label-slide-up' : ''
                                    }`}
                                htmlFor="text"
                            >
                               Quantity
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
                                id=""
                                placeholder="quantity"
                                name="quantity"
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className={`block text-white text-sm font-bold mb-2 transition-transform ${emailFocused ? 'label-slide-up' : ''
                                    }`}
                                htmlFor="text"
                            >
                                Price
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
                                id=""
                                name="price"
                                placeholder="price"
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className={`block text-white text-sm font-bold mb-2 transition-transform ${emailFocused ? 'label-slide-up' : ''
                                    }`}
                                htmlFor="text"
                            >
                                Details
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
                                id=""
                                name="details"
                                placeholder="details"
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                            />
                        </div>
                        <button className='w-full bg-pink-300 px-5 py-2 border-2 mt-8 text-white  rounded hover:bg-cyan-400 transition-colors duration-200 delay-500'>Conform</button>
                    </form>    {/* Rest of the code */}
                </div>
                {/* Rest of the code */}
            </div>
        </div>
    );
};

export default Updatetoy;


/*
<div className='container mx-auto'>
                <div className=' my-10'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="">
                            <input type="text" name="quantity" placeholder="Quantity,"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="">
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full mt-4">

                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>
                <button className=' bg-black p-5'>submit</button>
            </div>*/