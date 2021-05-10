
import React from 'react';
import {connect} from 'react-redux';
import shoppingCart from '../../img/shopping-cart.png';
import { useHistory } from 'react-router-dom';

const Cart = (props) => {

    const history = useHistory();

    const redirect = () => {
          history.push('/buy')
    }
    
    let totalCartElements = props.cart.length;
    
    return(
        
        <div className="cartContainer">
            <img className="cartImg" onClick={()=>redirect()} src={shoppingCart}/>
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