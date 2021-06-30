import { combineReducers } from 'redux';
import {
    SET_SNEAKERS,
    SET_IS_LOADING_SNEAKERS,
    SET_ERROR_SNEAKERS,
    CLEAR_ERROR_SNEAKERS,
    CLEAR_ALL_SNEAKERS,
    SET_CART,
} from '../actions/types';

const sneakersReducers = (state = null, action) => {
    switch (action.type) {
        case SET_SNEAKERS:
            return action.sneakers;
        case CLEAR_ERROR_SNEAKERS:
            return null;
        case CLEAR_ALL_SNEAKERS:
            return null;
        default:
            return state;
    }
};

const isLoadingSneakersReducers = (state = true, action) => {
    switch (action.type) {
        case SET_IS_LOADING_SNEAKERS:
            return action.isLoadingSneakers;
        case CLEAR_ALL_SNEAKERS:
            return true;
        default:
            return state;
    }
};

const errorSneakersReducers = (state = false, action) => {
    switch (action.type) {
        case SET_ERROR_SNEAKERS:
            return action.errorSneakers;
        case CLEAR_ALL_SNEAKERS:
            return false;
        default:
            return state;
    }
};

const cartReducers = (state = [], action) => {
    switch (action.type) {
        case SET_CART:
            return action.cart;
        default:
            return state;
    }
};

export default combineReducers({
    sneakers: sneakersReducers,
    isLoadingSneakers: isLoadingSneakersReducers,
    errorSneakers: errorSneakersReducers,
    shoppingCart: cartReducers,
});
