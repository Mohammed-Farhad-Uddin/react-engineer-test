import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFlights } from '../actions/flightAction';



const Cards = () => {

    const { loading, flights, error } = useSelector(state => state.flights);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFlights());
    }, [dispatch]);

    return (
        <>

        </>
    );
};

export default Cards;