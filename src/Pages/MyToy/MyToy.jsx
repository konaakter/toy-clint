import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import usetitle from '../../Hooktitle/usetitle';
import { Link } from 'react-router-dom';
import { FaArchive, FaEdit } from 'react-icons/fa';



const MyToy = () => {



    usetitle('My-toy')
    const { user } = useContext(AuthContext)
    const [mytoys, setmytoys] = useState([])


    const url = `https://toy-kona-server.vercel.app/email?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setmytoys(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://toy-kona-server.vercel.app/toy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        let timerInterval
                        Swal.fire({
                            title: 'Toy has been delete!',
                            html: 'Toy delete <b></b> milliseconds.',
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading()
                                const b = Swal.getHtmlContainer().querySelector('b')
                                timerInterval = setInterval(() => {
                                    b.textContent = Swal.getTimerLeft()
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                console.log('I was closed by the timer')
                            }
                        })
                        const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                        setmytoys(remaining);
                    }
                })
        }
    }
    return (

        <div>
            <h1>{mytoys.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className=" table   w-full">
                    {/* head */}
                    <thead className=''>
                        <tr className=' bg-gray-950'>

                            <th>ID</th>
                            <th> Photo</th>
                            <th> Toy Name</th>
                            <th>Cetagori</th>
                            <th>Quyality</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* row 1 */}

                        {
                            mytoys.map(mytoy =>

                                <tr className=' text-slate-800'>
                                    <th>1</th>
                                    <td>
                                        {
                                            <img className=' w-60' src={mytoy.photo
                                            } alt="" />
                                        }
                                    </td>
                                    <td>{mytoy.name}</td>
                                    <td>{mytoy.subcategory}</td>
                                    <td>{mytoy.quantity}</td>
                                    <td><button onClick={() => handleDelete(mytoy._id)} className=' p-5 text-cyan-400 text-4xl'> <FaArchive></FaArchive></button></td>
                                    <td> <Link to={`/update/${mytoy._id}`}> <button className=' text-pink-300 text-4xl'> <FaEdit></FaEdit></button></Link></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;

/*

 Swal.fire({
            
             title: 'Are you sure?',
             text: "You won't be able to revert this!",
             icon: 'question',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
             confirmButtonText: 'Yes, delete it!'
         }
         ).then((result) => {
             if (result.isConfirmed) {
                 fetch(`http://localhost:5000/toy/${id}`, {
                     method: 'DELETE'
                 })
                     .then(res => res.json())
                     .then(data => {
                         // console.log(data);
                         if (data.deletedCount > 0) {
                             Swal.fire({
                                 icon: 'error',
                                 title: 'Deleted!',
                                 text: 'Your file has been deleted.',
 
                             })
                             const remove = mytoys.filter(mytoy => mytoy._id !== id);
                             setmytoys(remove);
                         }
                     })
 
             }
         })
*/ 