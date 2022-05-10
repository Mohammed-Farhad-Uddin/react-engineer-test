import axios from 'axios';
import {
    ALL_FLIGHT_REQUEST, ALL_FLIGHT_SUCCESS, ALL_FLIGHT_FAIL
} from '../constants/flightConstant.js';


export const getFlights = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_FLIGHT_REQUEST });

        const { data } = await axios.get(`https://api.spacexdata.com/v3/launches`);

        dispatch({
            type: ALL_FLIGHT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: ALL_FLIGHT_FAIL,
            payload: error,
        });
    }
};


export const searchFlights = (search) => async (dispatch) => {
    try {
        dispatch({ type: ALL_FLIGHT_REQUEST });

        let url = `https://api.spacexdata.com/v3/launches?upcoming=${true}`

        const { data } = await axios.get(url);
        // const searchName = data.filter(flight => flight.rocket.rocket_name.toLowerCase().includes(search.toLowerCase()));
        console.log(data,"hhhh");
        dispatch({
            type: ALL_FLIGHT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_FLIGHT_FAIL,
            payload: error,
        });
    }
};


export const filterLastYear = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_FLIGHT_REQUEST });

        const d = new Date();

        let url = `https://api.spacexdata.com/v3/launches?launch_year=${d.getFullYear() - 1}`

        const { data } = await axios.get(url);

        dispatch({
            type: ALL_FLIGHT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_FLIGHT_FAIL,
            payload: error.response.data,
        });
    }
};


export const filterLunchStatus = (status) => async (dispatch) => {
    try {
        dispatch({ type: ALL_FLIGHT_REQUEST });

        const { data } = await axios.get(`https://api.spacexdata.com/v3/launches?launch_success=${status}`);

        dispatch({
            type: ALL_FLIGHT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_FLIGHT_FAIL,
            payload: error,
        });
    }
};