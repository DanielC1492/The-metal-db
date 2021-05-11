import { SHOWCOUNT, SEARCH, SHOWBAND, LOGOUTBAND} from '../types/bandsTypes';

const initialState = {
    band: []
};

const bandsReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOWBAND:
            return {
                ...state,
                band: action.payload
            }
        case SHOWCOUNT:
            return {
                ...state,
                count: action.payload
            }
        case SEARCH:
            return {
                ...state,
                band: action.payload
            }
        case LOGOUTBAND :
            return initialState
    
        default:
            return state
    }
};

export default bandsReducer;