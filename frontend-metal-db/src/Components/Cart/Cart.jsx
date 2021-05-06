
import React from 'react';
import {connect} from 'react-redux';
import shoppingCart from '../../img/shopping-cart.png';

const Cart = (props) => {

    
    let totalCartElements = props.cart.length;
    
    return(
        
        <div className="cartContainer">
            <img className="cartImg" src={shoppingCart}/>
            <div className="cartQuantity">{totalCartElements}</div>
        </div>
    
    )
}   

const mapStateToProps = (state) => {
    return {
        cart : state.shopReducer.cart
    }
}

export default connect(mapStateToProps)(Cart);