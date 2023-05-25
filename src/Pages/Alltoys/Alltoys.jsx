import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import usetitle from '../../Hooktitle/usetitle';
import { FaStarOfDavid } from 'react-icons/fa';

const Alltoys = () => {
    usetitle('All-toy')
    const loders = useLoaderData();
    const [datas, setdata] = useState(loders)
    console.log(datas)

    const [text, settext]=useState('')

    const handlealldata = () =>{
        fetch('https://toy-kona-server.vercel.app/toy')
        .then(res => res.json())
        .then(data => setdata(data))
    }

    const hendeleSerch = () => {
        fetch(`https://toy-kona-server.vercel.app/toy-serch/${text}`)
            .then(res => res.json())
            .then(data => setdata(data))
    }
    return (
        <div className=' '>

            <div>
                <div className=' flex  bg-pink-300  p-2 mb-5  text-center iteams-center justify-center'>
                    <FaStarOfDavid className=' text-white text-xl'></FaStarOfDavid>
                    <div className=' text-white text-3xl font-bold'>
                        <h1> All Product :{loders.length}</h1>
                    </div>
                    <FaStarOfDavid className=' text-white  text-xl'></FaStarOfDavid>
                </div>
                <div className=' flex justify-center space-x-4 my-6'>
                    <input onChange={(e) => settext(e.target.value)} type="text" placeholder="Search" className=" input input-bordered w-full max-w-xs" />
                    <button onClick={hendeleSerch} className="btn -ms-20 bg-pink-300 border-0 hover:bg-cyan-400">Search</button>
                    <button className='btn -ms-20 bg-pink-300 border-0 hover:bg-cyan-400' onClick={handlealldata}>Back</button>
                </div>

                <div className="overflow-x-auto container mx-auto">
                    <table className="min-w-full">
                        <thead className=' bg-cyan-400'>
                            <tr>
                                <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                    ID
                                </th>
                                <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                    Toy Name
                                </th>
                                <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                    Cetagori
                                </th>
                                <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                    Price
                                </th>
                                <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                    Quantity
                                </th>
                                <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                    Veiws more
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-cyan-400">



                            {
                                datas.map(data =>


                                    <tr className=' hover:bg-gray-200 transition-colors duration-300 delay-300' >
                                        <th>1</th>

                                        <td className="py-4 px-6 whitespace-nowrap">
                                            {
                                                data.name && <p>{data.name}</p>
                                            }
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap">{data.subcategory}</td>
                                        <td className="py-4 px-6 whitespace-nowrap">{data.price}</td>
                                        <td className="py-4 px-6 whitespace-nowrap">{data.quantity}</td>
                                        <td className="py-4 px-6 whitespace-nowrap"> <Link to={`/tabone/${data._id}`}><button className=' bg-pink-300 px-5 py-2 border-2 text-white  rounded hover:bg-cyan-400 transition-colors duration-200 delay-500'>viwe details</button></Link></td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
};

export default Alltoys;


/*


<div>
                <h1>{loders.length}</h1>

                <div className="">
                    <table className="">
                        <thead>
                            <tr>

                                <th>ID</th>
                                <th> Toy Name</th>
                                <th>Cetagori</th>
                                <th>Price</th>
                                <th>Quyality</th>
                                <th>View details</th>
                            </tr>
                        </thead>
                        <tbody>
                        

                            {
                                loders.map(loder =>

                                    <tr>
                                        <th>1</th>
                                        <td>
                                        {
                                            loder.name && <p>{loder.name}</p> 
                                        }
                                        </td>
                                        <td>{loder.subcategory}</td>
                                        <td>{loder.price}</td>
                                        <td>{loder.quantity}</td>
                                        <td><button  className=' p-5 bg-slate-400'>viwe details</button></td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>*/