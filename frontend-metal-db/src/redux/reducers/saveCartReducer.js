import { SAVE, LOGOUTSAVE} from '../types/saveCartTypes';

const initialState = {
    saveCart: []
};

const saveCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE: 
      return {
        ...state, 
        saveCart: action.payload
      }
      case LOGOUTSAVE :
        return initialState

    
    default:
          return state;
    };
};

export default saveCartReducer;