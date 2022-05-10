import { ALL_FLIGHT_REQUEST, ALL_FLIGHT_SUCCESS, ALL_FLIGHT_FAIL } from '../constants/flightConstant';



export const FlightsReducer = (state = { flights: [] }, action) => {
    switch (action.type) {
        case ALL_FLIGHT_REQUEST:
            return {
                loading: true,
                flights: [],
            };
        case ALL_FLIGHT_SUCCESS:
            return {
                loading: false,
                flights: action.payload,
            };
        case ALL_FLIGHT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};



// import { createSlice } from '@reduxjs/toolkit'

// export const FlightsReducer = createSlice({
//     name: 'Flights',
//     initialState: { flights: [] },
//     reducers: {
//         allFlights: (state, action) => {
//             state.loading = false
//             state.flights = action.payload;
//         }
//     },
// });

//export default FlightsReducer.reducer;