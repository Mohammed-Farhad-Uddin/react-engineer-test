import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { filterLastMonth, filterLastYear, filterLaunchStatus, getFlights, searchFlights, upcomingFlights } from './actions/flightAction';
import './App.css';
import Loading from './components/Loading';



function App() {
  const { loading, flights, error } = useSelector(state => state.flights);

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
    dispatch(searchFlights(search));
  }, [dispatch, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  }

  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1 style={{ textAlign: 'center', textTransform: "uppercase" }}>Rocket Details</h1>
        <div className='header'>
          <div style={{ width: '50%' }} class="input-group">
            <input onChange={handleSearch} id="search-input" style={{ width: '300px' }} type="search" class="form-control" placeholder="Search anything..." />
          </div>
          <div style={{ width: '30%' }}>
            <h2>Filter Data</h2>
            <ul>
              <li > <Button onClick={() => dispatch(filterLastYear())} >Last Year</Button> </li>
              <li > <Button onClick={() => dispatch(filterLastMonth())}>Last Month</Button></li>
              <li> <Button onClick={() => dispatch(filterLaunchStatus(true))}>Launch Success</Button> </li>
              <li > <Button onClick={() => dispatch(filterLaunchStatus(false))}>Launch Failure</Button> </li>
              <li > <Button onClick={() => dispatch(upcomingFlights())}>Upcoming?</Button> </li>
            </ul>

          </div>
        </div>
       <div>
         {
           loading ? <Loading/> : <Row>
           {
             flights.map((flight, index) => <Col sm={6} md={3} key={index}>
 
               <Card style={{ width: '15rem', border: 'none', padding: "10px" }}>
                 <Card.Img style={{ width: '15rem' }} variant="top" src={flight.links.mission_patch_small} />
                 <Card.Body>
                   <Card.Title>Misson Name : {flight.mission_name}</Card.Title>
                   <Card.Title>Rocket Name : {flight.rocket.rocket_name}</Card.Title>
                   <Card.Title>Rocket Type : {flight.rocket.rocket_type}</Card.Title>
                   <Card.Title>Rocket Type : {flight.launch_year}</Card.Title>
                   <Card.Text>
                     {flight.details}
                   </Card.Text>
                 </Card.Body>
               </Card>
             </Col>
             )}
         </Row>
         }
       </div>
      </Container>
    </>
  );
}

export default App;
