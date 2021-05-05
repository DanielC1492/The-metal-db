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
                                            Get a coffe,a tea.<br></br>
                                            Get a beer if you want!<br></br>
                                            With this mug you will carry the power of music while you get hidrated.      
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
                                        The ultimate craft made by our top of the line artisans.<br></br>
                                        This tee will show the world that you are part of the elite.<br></br>
                                        You can choose color and size!!!
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
