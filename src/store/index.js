import { createStore, compose, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import * as api from '../config';
import { rootReducer } from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunk.withExtraArgument({
                client: axios,
                api,
            })
        )
    )
);

export { store };
