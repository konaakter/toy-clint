import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Languesetab from './Languesetab';
import Mathtab from './Mathtab';
import Scincetab from './Scincetab';
import { useNavigate } from 'react-router-dom';

const Tabcaragori = () => {

   
    const [languages, setlanguages] = useState([]);
    const [maths, setmaths] = useState([]);
    const [scinces, setscince] = useState([]);


    const [tap, settab] = useState('language')
    const [datas, setdatas] = useState([])


    useEffect(() => {
        fetch(`https://toy-kona-server.vercel.app/toy?subcategory=${tap}`)
            .then(res => res.json())
            .then(data => setdatas(data))

    }, [tap])



    return (
        <div className='container mx-auto my-10'>

            <h1 className=' text-5xl font-semibold text-cyan-400 text-center mb-7'>TOY<span className=' text-pink-300'>S CETAGORI</span></h1>
            <Tabs>
                <TabList>
                    <Tab onClick={() => settab('language')} >Language</Tab>
                    <Tab onClick={() => settab('Science')} >Science</Tab>
                    <Tab onClick={() => settab('Math')} >Math</Tab>


                </TabList>

                <TabPanel>
                    <div data-aos="zoom-out-up" className='lg:grid lg:grid-cols-3 gap-3 space-y-5  mt-10'>
                        {
                            datas.map(data => <Languesetab
                                data={data}

                            ></Languesetab>)
                        }



                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='lg:grid lg:grid-cols-3  space-y-5 mt-10 gap-3'>
                        {
                            datas.map(data => <Scincetab
                                data={data}

                            ></Scincetab>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='lg:grid lg:grid-cols-3 space-y-5 mt-10 gap-3'>
                        {
                            datas.map(data => <Mathtab
                                data={data}

                            ></Mathtab>)
                        }
                    </div>



                </TabPanel>

            </Tabs>

        </div>
    );
};

export default Tabcaragori;

