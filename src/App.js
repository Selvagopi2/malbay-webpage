import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function Services() {
  return <div>Services Page</div>;
}

function Locations() {
  return <div>Locations Page</div>;
}

function Contact() {
  return <div>Contact Page</div>;
}

function Fleets() {
  return <div>Fleets Page</div>;
}

function Pricing() {
  return <div>Pricing Page</div>;
}

function BookNow() {
  return <div>Book Now Page</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/locations" component={Locations} />
          <Route path="/contact" component={Contact} />
          <Route path="/fleets" component={Fleets} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/booknow" component={BookNow} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


