import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { FlightsReducer } from './reducers/flightReducer';



const reducer = combineReducers({
    flights: FlightsReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import FlightsReducer from './reducers/flightReducer'

// const store = configureStore({
//     reducer: {
//         Flights:FlightsReducer,
//     }
// })


// export default store;