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

        let url = `https://api.spacexdata.com/v3/launches`

        const { data } = await axios.get(url);
        const searchName = data.filter(flight => flight.rocket.rocket_name.toLowerCase().includes(search.toLowerCase()));

        dispatch({
            type: ALL_FLIGHT_SUCCESS,
            payload: searchName,
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

        // const d = new Date();

        // let url = `https://api.spacexdata.com/v3/launches?launch_year=${d.getFullYear() - 1}`
        const { data } = await axios.get(`https://api.spacexdata.com/v3/launches`);

        const lastYear = data.filter(flight => (new Date(flight.launch_date_utc).getUTCFullYear() === new Date().getUTCFullYear() - 1));

        dispatch({
            type: ALL_FLIGHT_SUCCESS,
            payload: lastYear,
        });
    } catch (error) {
        dispatch({
            type: ALL_FLIGHT_FAIL,
            payload: error.response.data,
        });
    }
};

export const filterLastMonth = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_FLIGHT_REQUEST });

        // const d = new Date();

        // let url = `https://api.spacexdata.com/v3/launches?launch_year=${d.getFullYear() - 1}`
        const { data } = await axios.get(`https://api.spacexdata.com/v3/launches`);

        const lastMonth = data.filter(flight => (new Date(flight.launch_date_utc).getUTCFullYear() === new Date().getUTCFullYear() && new Date(flight.launch_date_utc).getUTCMonth() === new Date().getUTCMonth() - 1));

        dispatch({
            type: ALL_FLIGHT_SUCCESS,
            payload: lastMonth,
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


export const upcomingFlights = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_FLIGHT_REQUEST });

        let url = `https://api.spacexdata.com/v3/launches/upcoming`

        const { data } = await axios.get(url);

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