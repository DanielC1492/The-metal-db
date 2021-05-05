import React from 'react'
import background from '../../img/background.jpg';
import { Navbar } from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import tshirt from '../../img/tshirt-merch.jpg';
import mug from '../../img/mug-merch.jpg';

const Shop = () => {
    return (
        <>
        <Header/>
            <Navbar/>
            <div className='shopContainer' style={{ backgroundImage: `url(${background})`}}>
                <div className='black'>
                    <div className='banner'></div>
                    <div className='productsDiv'>
                        <div className='mugDiv' >
                            <div className='productDiv'>
                                <div className='productTop'>
                                    <div className='productTopLeft'>
                                        <img className='productImg' src={mug}></img>
                                    </div>
                                    <div className='productTopRight'>
                                            <div className='productName'>Mug</div>
                                            <div className='productPrice'>7,95€</div>
                                    </div>
                                </div>
                                <div className='productBot'>
                                    <div className='productInfo'>
                                            asdasdasdasd
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='tshirtDiv' >
                            <div className='productDiv'>
                                <div className='productTop'>
                                    <div className='productTopLeft'>
                                        <img className='productImg' src={tshirt}></img>
                                    </div>
                                    <div className='productTopRight'>
                                            <div className='productName'>T-shirt</div>
                                            <div className='productPrice'>15,95€</div>
                                    </div>
                                </div>
                                <div className='productBot'>
                                    <div className='productInfo'>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
