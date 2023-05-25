import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import usetitle from '../../Hooktitle/usetitle';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/142230-login.json";

const Login = () => {
    usetitle('Login')
    const [error, seterror] = useState('')
    const { Loginemail, Googlelogin } = useContext(AuthContext);
    let navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/";


    const handlelogin = (event) => {
        event.preventDefault();
        seterror('')

        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        Loginemail(email, password)
            .then(result => {
                const reuser = result.user;
                console.log(reuser);
                event.target.reset();
                navigate(form, { replace: true });

            })
            .catch(error => {
                console.log(error);
                seterror(error.message);
            })


    }

    const handlergoogle = () => {
        Googlelogin()
            .then(result => {
                const gogle = result.user
                console.log(gogle);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='container mx-auto'>
            <div className=' lg:flex lg:gap-40 '>
                <div data-aos="zoom-in-down" className=' border lg:w-3/12 w-4/5 lg:mx-0 mx-auto py-12  px-7 my-11 bg-pink-300  '>
                    <h2 className='text-2xl text-bold text-white mb-4'>Login</h2>
                    <form onSubmit={handlelogin} >
                        <div className="form-control">
                            <label htmlFor="email" className='text-white'>Email</label>
                            <input className=' p-2 rounded' placeholder='Email' type="email" name="email" id="" required />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password" className='text-white'>Password</label>
                            <input className=' p-2 rounded' placeholder='Password' type="password" name="password" id="" required />
                        </div>
                        <button className="btn btn-wide bg-cyan-400 border-white mt-6"> <Link to="/">Login</Link></button>

                        <p className=' mt-5  text-white'>------------------or------------------</p>
                        <button onClick={handlergoogle} className="btn btn-wide bg-white text-cyan-400 border-cyan-400 mt-6"> <Link to="/">Google</Link></button>

                        <p className=' text-red-600'>{error}</p>
                    </form>
                    <p className='text-white'> <small>New to this website ? please  <Link className=' text-cyan-400 underline' to='/registatoin'>Registatoin</Link></small></p>
                </div>
                <div>
                    <Lottie className=' lg:w-7/12 lg:mt-24' animationData={groovyWalkAnimation} />;
                </div>
            </div>
        </div>
    );
};

export default Login;