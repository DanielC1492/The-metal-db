import React from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
    <>
        <Navbar/>
        <div className='homeContainer'>
            <div className='leftMid'>
                <div className='leftTop'>
                    <div className='search'></div>
                   
                </div>
                <div className='leftBot'>
                    <div className='weeklySugest'></div>
                </div>
                
            </div>
            <div className='rightMid'>
                <div className='topBands'></div>
            </div>
        </div>

    </>
    )
}

export default Home
