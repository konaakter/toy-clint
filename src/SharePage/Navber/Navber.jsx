import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo1.png'
import { AuthContext } from '../../Provider/Authprovider';

const Navber = () => {

    const { user, logOutemail } = useContext(AuthContext)

    const handlelogout = () => {
        logOutemail()
            .then()

            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <div className='bg-cyan-400 text-center py-3'>
                <div className='flex justify-center items-center'>
                    <h1 className=' text-white text-lg me-5  '>Up to 50% off for Winter Collections Shop Now</h1>
                    <button className='bg-pink-300 lg:px-5 px-2 lg:py-2 border-2 text-white border-white rounded'>Shop Now</button>

                </div>
            </div>
            <div className='container mx-auto'>
                <div className="navbar bg-base-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-pink-300 rounded-box w-52 p-5">
                                
                                <NavLink to='/'
                                    className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')}
                                >Home</NavLink>
                                <div>
                                    {
                                        user && <NavLink to='/mytoy ' className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')}>My Toys</NavLink>
                                    }
                                </div>
                                <div>
                                    {
                                        user && <NavLink to='/addtoy' className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')}> Add A Toy</NavLink>
                                    }
                                </div>
                                <NavLink to='/alltoy' className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')}> All toys </NavLink>
                                <NavLink to='/blog' className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')} >Blog</NavLink>
                            </ul>
                        </div>
                        <div className='flex items-center'>
                            <img className='lg:h-20 h-14  w-full' src={logo} alt="" />
                            <a className="btn btn-ghost normal-case lg:text-3xl text-lg font-bold text-cyan-400 ">TOY<span className=' text-pink-300'> HOME</span></a>

                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-6">
                            <NavLink to='/'
                                className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')}
                            >Home</NavLink>
                            <div>
                                {
                                    user && <NavLink to='/mytoy ' className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')}>My Toys</NavLink>
                                }
                            </div>
                            <div>
                                {
                                    user && <NavLink to='/addtoy' className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')}> Add A Toy</NavLink>
                                }
                            </div>
                            <NavLink to='/alltoy' className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')}> All toys </NavLink>
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? ' text-cyan-400' : 'default')} >Blog</NavLink>
                        </ul>




                    </div>
                    <div className="navbar-end  space-x-2">
                    
                        <div>
                            <p>
                                {
                                    user && <span>{user?.display}</span>
                                }
                            </p>
                            <p>
                                {
                                    user ?
                                        <span className='flex gap-2 justify-center content-center'>
                                            {
                                                user.photoURL &&
                                                <img className='w-12 rounded-full' title={user.displayName ? user.displayName : ''} src={user.photoURL} />
                                            }
                                            <Link onClick={handlelogout} className="btn">LogOut</Link> </span>
                                        : <Link to={'/login'} className="btn">Login</Link>
                                }
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navber;


