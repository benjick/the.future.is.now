import React from 'react';
import Fit from './Fit';

const Home = () => (
  <React.Fragment>
    <Fit>Max Malm</Fit>
    <Fit>Max Malm</Fit>
    <Fit>Max Malm</Fit>
    <h2>Frontend developer</h2>
    <ul>
      <li>React</li>
      <li>Web</li>
      <li>Computers</li>
      <li>Mobile</li>
      <li>Docker</li>
      <li>Hyped stuff</li>
    </ul>
    <ul>
      <li>
        <a href="http://github.com/benjick">Github</a>
      </li>
      <li>
        <a href="mailto:max@malm.me">max@malm.me</a>
      </li>
    </ul>
  </React.Fragment>
);

export default Home;
