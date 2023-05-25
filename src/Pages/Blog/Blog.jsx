import React, { useState } from 'react';
import usetitle from '../../Hooktitle/usetitle';

const Blog = () => {
    usetitle('Blog')


    return (
        <div className='w-3/4	mx-auto border-4 border-pink-300 my-8'>
            < div className=' my-7 space-y-6 mx-auto w-5/6'> 
                < h1 className=' text-3xl text-black'>
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <p className=' text-zinc-800'>
                    Tokens: Authentication, Authorization, Storage.

                    Access Token: Short-lived, used for accessing protected resources.
                    Refresh Token: Long-lived, used to obtain new access tokens.
                    Store access token in memory/session storage.
                    Store refresh token in secure storage (e.g., HTTP-only cookie).
                </p>

            </div>
            <div className=' my-7 space-y-6 mx-auto w-5/6'>
                < h1 className=' text-3xl text-black'>Compare SQL and NoSQL databases?</h1>
                <p className=' text-zinc-800'>
                    SQL Databases:

                    1. Query Language (SQL) databases are based on the relational data model.
                    2.They use tables to store data with predefined schemas and enforce data consistency through constraints.
                    3. SQL databases are suitable for complex and structured data with relationships.
                </p>
                <p>
                    NoSQL Databases:

                    1.NoSQL databases refer to "non-SQL" or "non-relational" databases.
                    2.They provide a flexible schema design, allowing for the storage of unstructured or semi-structured data.
                    3.NoSQL databases are horizontally scalable, meaning they can handle increasing loads by adding more servers to a cluster.

                </p>

            </div>
            <div className=' my-7 space-y-6 mx-auto w-5/6'>
                < h1 className=' text-3xl text-black'>What is express js? What is Nest JS?</h1>
                <p className=' text-zinc-800'>
                    Express.js: Minimal and flexible web application framework for Node.js.
                </p>
                <p className=' text-zinc-800'>
                    Nest.js: Progressive Node.js framework for scalable server-side applications.
                </p>

            </div>
            <div className=' my-7 space-y-6 mx-auto w-5/6'>
                < h1 className=' text-3xl text-black'>What is MongoDB aggregate and how does it work ?
                </h1>
                <p className=' text-zinc-800'>Aggregation: Perform complex data operations, including filtering, grouping, sorting, and calculating.</p>
                <p className=' text-zinc-800'>Pipeline: Series of stages in aggregation, each stage applies an operation to the data.

                </p>
                <p className=' text-zinc-800'>
                    Operators: Perform actions like matching, projecting, grouping, sorting, and transforming data.


                </p>
                <p className=' text-zinc-800'>
                    Data Flow: Documents pass through stages, transforming and filtering along the way.


                </p>


            </div>
        </div>





    );
};

export default Blog;