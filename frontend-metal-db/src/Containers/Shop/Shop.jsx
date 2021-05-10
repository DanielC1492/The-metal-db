import React, {useState} from 'react'
import {connect} from 'react-redux';
import background from '../../img/background-concert.jpg';
import { Navbar } from '../../Components/Navbar/Navbar';
import tshirt from '../../img/tshirt-merch.jpg';
import mug from '../../img/mug-merch.jpg';
import {ADD} from '../../redux/types/shopTypes';
import Cart from '../../Components/Cart/Cart';

const Shop = (props) => {


    const [msgError, setMsgError] = useState('');

    const addToCart = (prod) => {

        let productData= {}
      
        if(prod === 'mug'){
            productData = {
                name : "mug",
                price : 7.95,
                image : "img/mug-merch.jpg",
                inCart : 0
            }
        }else{
            productData = {
                name : "T-shirt",
                price : 15.95,
                image : "img/tshirt-merch.jpg",
                inCart : 0
            }
        }
        

        //sumamos un producto más al carrito 
        productData.enCarrito = productData.enCarrito + 1;

        //guardariamos el producto en RDX
        props.dispatch({type: ADD, payload: productData});
    


    
    
    }


    return (
        <>
        
            <Navbar>
                
            </Navbar>
                <Cart/>  
            <div className='shopContainer' style={{ backgroundImage: `url(${background})`}}>
                <div className='black'>             
                    <div className='banner'></div>
                    <div className='productsDiv'>
                        <div className='mugDiv' >
                            <div className='productDiv'>
                                <div className='productTop'>
                                    <div className='productTopLeft'>
                                        <img className='productImg'  src={mug} alt='mug'></img>
                                    </div>
                                    <div className='productTopRight'>
                                        <div className='productUpper'>
                                            <div className='productName'>Mug</div>
                                            <div className='productPrice'>7,95€</div>
                                        </div>
                                        <div className='productLower'>
                                            <button className='addToCartButton' onClick={()=> addToCart("mug")}>Add to cart</button>
                                        </div>
                                    </div>
         
                                </div>
                                <div className='productBot'>
                                    <div className='productInfo'>
                                            Get a coffe,a tea...<br></br>
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
                                        <img className='productImg' src={tshirt} alt='tshirt'></img>
                                    </div>
                                    <div className='productTopRight'>
                                        <div className='productUpper'>
                                            <div className='productName'>Mug</div>
                                            <div className='productPrice'>7,95€</div>
                                        </div>
                                        <div className='productLower'>
                                            <button className='addToCartButton' name='add to cart' onClick={()=> addToCart("T-shirt")}>Add to cart</button>
                                        </div>
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

const mapStateToProps = state => {
    return {
        cart : state.shopReducer.shop
    }
}

export default connect(mapStateToProps)(Shop);

