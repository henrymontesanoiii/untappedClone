import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import API from "./utils/API";
import BeerList from "./components/pages/beerList";

const App = () => (
  <Router>
    <div>
      <br></br>
      <Route exact path="/home" component={BeerList} />
      <Route exact path="/" component={BeerList} />
      <br></br><br></br><br></br>
      
    </div>
  </Router>
);

export default App;

