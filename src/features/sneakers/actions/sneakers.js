import {
    getSneakers,
    deleteSneaker,
} from '../services/sneakers';
import {
    SET_SNEAKERS,
    SET_IS_LOADING_SNEAKERS,
    SET_ERROR_SNEAKERS,
    CLEAR_ERROR_SNEAKERS,
    CLEAR_ALL_SNEAKERS,
} from './types';

const setSneakers = sneakers => ({
    type: SET_SNEAKERS,
    sneakers,
});

const setIsLoadingSneakers = isLoadingSneakers => ({
    type: SET_IS_LOADING_SNEAKERS,
    isLoadingSneakers,
});

const setErrorSneakers = errorSneakers => ({
    type: SET_ERROR_SNEAKERS,
    errorSneakers,
});

const clearErrorSneakers = () => ({
    type: CLEAR_ERROR_SNEAKERS,
});

const clearAllSneakers = () => ({
    type: CLEAR_ALL_SNEAKERS,
});

/**
 * Obtiene zapatillas
 */
const getSneakersThunk = () => async (dispatch) => {
    const response = await getSneakers();
    const {
        isCancel,
        data,
    } = response;
    if (response.status === 200) {
        const customResults = data.filter((sneaker) => sneaker.modelo )
        dispatch(setSneakers(customResults));
    } else {
        dispatch(setErrorSneakers(true));
    }
    dispatch(setIsLoadingSneakers(false));
    return isCancel;
};

/**
 * TODO:
 * Eliminar zapatilla
 */
const deleteSneakerThunk = (sneakerData, sneakers) => async (dispatch) => {
    /* TODO: 
     * eliminar dato desde la API
     * controlar respuesta al eliminar
    const response = await deleteSneaker(sneakerData);
    */
   const { id } = sneakerData;
   const sneakersAfterDelete = sneakers.filter(sneaker => sneaker.id !== id);
   dispatch(setSneakers(sneakersAfterDelete));
};


export {
    setSneakers,
    setIsLoadingSneakers,
    setErrorSneakers,
    clearErrorSneakers,
    clearAllSneakers,

    getSneakersThunk,
    deleteSneakerThunk,
};
