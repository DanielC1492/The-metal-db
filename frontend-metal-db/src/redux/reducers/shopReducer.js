import {ADD, REMOVE, CLEAN, EDIT, TOTAL_CART} from '../types/shopTypes';

const initialState = {
    cart : [],
    totalCart : 0
};

const shopReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD :
            return {
                ...state,

                cart: [...state.cart, action.payload]
            }
        
        case REMOVE : 
            return {
                ...state,
                cart : action.payload
            }

        case EDIT:
		
            let newCart = state.cart.map( (_x) => {
                
                if (_x.nombre === action.payload.nombre) { // si ya existe
                    _x.enCarrito = action.payload.nuevaCantidad; // lo modifico
                };
                
                return _x;
                
            });
        
        return {
            ...state,
            cart: newCart,
        };

        case CLEAN : 
            return {
                ...state,
                cart : action.payload
            }
            

        case TOTAL_CART : 
            return {
                ...state,
                totalCart : action.payload
            }

        default : 
            return state
    }
}

export default shopReducer;