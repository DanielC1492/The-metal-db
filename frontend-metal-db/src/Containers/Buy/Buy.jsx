import react, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import background from '../../img/background-concert.jpg';
import {ADD, REMOVE, CLEAN, TOTAL_CART, LOGOUTCART} from '../../redux/types/shopTypes';
import {SAVE } from '../../redux/types/saveCartTypes';

import React from 'react'

const Buy = (props) => {

    const history = useHistory();

    useEffect(()=>{
        calcTotal();
    },[]);

    useEffect(()=>{
        calcTotal();
    },);

    const saveElements = (picture) => {

        props.dispatch({type: SAVE, payload: picture});

        setTimeout(() => {history.push('/show-comic')}, 500);
    }

    const calcTotal = () => {

        let priceTotal = 0;

        // props.cart.map(resume=>{
        //     return priceTotal += (resume.price * resume.inCart);
        // })

        // props.dispatch({type: TOTAL_CART, payload: priceTotal });
        
    };

    const buyComic = async (prod, index) => {

        let body = {
            name: prod.name,
            price: prod.price,
            image: prod.image,
            // iduser: props.user[0].id,
        }
    }
    const emptyCart = () => {
        //vaciamos el carrito con un dispatch que igual a 0 el contenido

        // props.dispatch({type: CLEAN, payload: [] });
        
        
    };

    return (
        <>
        <Navbar/>
        <div className='buyContainer' style={{ backgroundImage: `url(${background})`}}>
            <div className='black'>
                <div className='cardLogin'>

                    <button color="danger" onClick={()=> buyComic()}>Comprar</button>
                </div>
                <div className="btnEmpty">
                    <button onClick={()=> emptyCart()}>Vaciar Compra</button>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Buy;
