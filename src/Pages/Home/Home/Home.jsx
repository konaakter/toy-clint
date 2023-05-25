import React from 'react';
import Banner from '../Banner/Banner';
import Tabcaragori from '../Tabcaragori/Tabcaragori';
import usetitle from '../../../Hooktitle/usetitle';
import Gally from '../Gally/Gally';
import Service from '../Service/Service';
import Ourblog from '../Ourblog/Ourblog';

const Home = () => {

    usetitle('Home')
    return (
        <div>
           <Banner></Banner>
           <Gally></Gally>
           <Tabcaragori></Tabcaragori>
           <Service></Service>
           <Ourblog></Ourblog>
            
        </div>
    );
};

export default Home;