import axios from 'axios';
import {
    ALL_FLIGHT_REQUEST, ALL_FLIGHT_SUCCESS, ALL_FLIGHT_FAIL
} from '../constants/flightConstant.js';


export const getFlights = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_FLIGHT_REQUEST });
        const { data } = await axios.get(`https://api.spacexdata.com/v3/launches`);
        // console.log(data);
        dispatch({
            type: ALL_FLIGHT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_FLIGHT_FAIL,
            payload: error.response.data.message,
        });
    }
};