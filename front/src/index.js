import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'; 

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware(); 

const createStoreWithMMiddleware = applyMiddleware(
    promiseMiddleware,
    ReduxThunk,
    sagaMiddleware,
)(createStore);

const configureStore = createStoreWithMMiddleware(
    rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),);
configureStore.sagaTask = sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider
        store={configureStore}
    >
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
