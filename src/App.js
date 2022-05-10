import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getFlights, searchFlights } from './actions/flightAction';



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

  const filterBy = []


  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <div>
          <h1 style={{ textAlign: 'center', textTransform: "uppercase" }}>Rocket Details</h1>
          <div style={{ width: '500px', margin: '20px auto' }} class="input-group">
            <input onChange={handleSearch} id="search-input" type="search" class="form-control" placeholder="Search anything..." />
          </div>
        </div>
        <div>
          <ul>

          </ul>
        </div>
        <Row>
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
      </Container>
    </>
  );
}

export default App;
