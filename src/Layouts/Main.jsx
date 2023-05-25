import React from 'react';
import Navber from '../SharePage/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Fotter from '../SharePage/Fotter/Fotter';

const Main = () => {
    return (
        <div >
            <Navber></Navber>
            <Outlet></Outlet>
            <Fotter></Fotter>
            
        </div>
    );
};

export default Main;