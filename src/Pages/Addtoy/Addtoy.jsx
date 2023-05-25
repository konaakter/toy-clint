import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import usetitle from '../../Hooktitle/usetitle';
import Swal from 'sweetalert2';

const Addtoy = () => {
    usetitle('Addtoy')
    const { user } = useContext(AuthContext)
    const handleaddtoy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name?.value;
        const email = form.email?.value;
        const sellerName = form.seller?.value;
        const quantity = form.quantity?.value;
        const subcategory = form.category?.value;
        const details = form.details?.value;
        const photo = form.photo?.value;
        const price = form.price?.value;
        const rating = form.rating?.value;

        const addtoy = { name, quantity, sellerName, email, subcategory, rating, price, details, photo }
        console.log(addtoy )
        fetch('https://toy-kona-server.vercel.app/toy',{
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(addtoy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Product has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        })

    }



    return (
        <div className='  '>

            <div className='container mx-auto py-16'>
                <div className='border-4 border-pink-300 p-1'>
                    <div className=' bg-cyan-300  hover:bg-pink-300 transition-colors duration-200 delay-500   p-20'>
                        <form onSubmit={handleaddtoy}>
                            <div className=' grid lg:grid-cols-2 gap-7'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <label className="">
                                        <input defaultValue={user?.email} type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="seller" placeholder="Seller Name"
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="quantity"  placeholder="Quantity,"
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
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <label className="">
                                        <select name="category" id="color" className="input input-bordered w-full">
                                        <option value="language">Language</option>
                                            
                                            <option value="Math">Math</option>
                                            <option value="Science">Science</option>

                                        </select>
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                


                            </div>
                            <div className="form-control w-full mt-4">

                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            <button className=' w-full bg-pink-300 px-5 py-2 border-2 mt-8 text-white  rounded hover:bg-cyan-400 transition-colors duration-200 delay-500'>Conform</button>
                        </form>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default Addtoy;

/*const email = form.email.value;
        const  selername= form.selername.value;
        const  subcategory = form.subcategory.value;
        const  price = form.price.value;
        const  rating = form.rating.value;
        const  quantity = form.quantity.value;
        const  photo = form.photo.value;
        const detail  = form.detail .value;


         email,
        selername,
        subcategory,
        price ,
        rating ,
        quantity,
        photo,
        detail,
*/