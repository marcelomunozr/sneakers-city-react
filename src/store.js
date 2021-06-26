import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import sneakers from './features/sneakers/reducers/sneakers';

const rootReducer = combineReducers({
    sneakers,
});

const middlewares = [thunk];

/* Agrega middlewares */
const configureStore = () => createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
);

export default configureStore;
