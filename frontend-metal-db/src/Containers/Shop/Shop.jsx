import React from 'react'
import background from '../../img/background.jpg';
import { Navbar } from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';

const Shop = () => {
    return (
        <>
        <Header/>
            <Navbar/>
            <div className='shopContainer' style={{ backgroundImage: `url(${background})`}}>
                <div className='black'>
                    <div className='banner'></div>
                    <div className='productsDiv'>
                        <div className='mugDiv'></div>
                        <div className='tshirtDiv'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
