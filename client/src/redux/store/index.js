
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;




// import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware, compose } from 'redux';
// import rootReducer from '../reducer';
// import thunk from 'redux-thunk';

// const composeEnhancers =
//     (typeof window !== 'undefined' &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;

// const store = configureStore({reducer: rootReducer, composeEnhancers: applyMiddleware(thunk)}

// );