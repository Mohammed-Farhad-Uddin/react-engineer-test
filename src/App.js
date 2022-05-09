import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFlights } from './actions/flightAction';



function App() {
  const { loading, flights, error } = useSelector(state => state.flights);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);

  return (
    <div>

    </div>
  );
}

export default App;
