import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import { Link } from 'react-router-dom';
import usetitle from '../../Hooktitle/usetitle';
import groovyWalkAnimation from "../../assets/142230-login.json";
import Lottie from "lottie-react";


const Registatoin = () => {
    usetitle('Register')
    const { SignIn, updatUser } = useContext(AuthContext);
    const [error, seterror] = useState('')
    const [succes, setsucces] = useState('')


    const handlesingup = (event) => {
        event.preventDefault();
        setsucces('');
        seterror('');
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)


        if (password.length < 6) {
            return seterror('Please add at least 6 chahacters in you password ')
        }
        SignIn(email, password)
            .then(async result => {
                const reuser = result.user;
                console.log(reuser);
                await updatUser(name, photo);

                event.target.reset();


            })

            .catch(error => {
                console.log(error.message);
                seterror(error.message)
            })
    }
    return (
        <div className=' my-20 overflow-hidden'>
            <h1 className=' text-5xl text-center mb-5'>Registatoin</h1>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-center lg:text-left">
                        <Lottie className=' lg:w-7/12 lg:mt-24' animationData={groovyWalkAnimation} />;
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl hover:shadow-none bg-cyan-400">
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className="card-body">
                            <form onSubmit={handlesingup}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className=" input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="photo" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="pasword" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className=" bg-pink-300 py-4 rounded-full">Regitatoin</button>
                                    <p className=''> <small>You havea already Account ? please  <Link className=' text-pink-400 underline' to='/login'>LOgin</Link></small></p>
                                    <p className=' text-red-600'>{error}</p>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default Registatoin;