import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UtilScroll from './utilScroll';
import Nav from './components/nav/nav.jsx';
import Home from './pages/home/home.jsx';
import WebDesign from './pages/web-design/webDesign.jsx';
import AppDesign from './pages/app-design/appDesign.jsx';
import GraphicDesign from './pages/graphic-design/graphicDesign.jsx';
import About from './pages/about/about.jsx';
import Locations from './pages/locations/locations.jsx';
import Contact from './pages/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <Router>
    <div className="App">
    <UtilScroll />
    <Nav />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/web-design" component={WebDesign} />
    <Route exact path="/app-design" component={AppDesign} />
    <Route exact path="/graphic-design" component={GraphicDesign} />
    <Route exact path="/about" component={About} />
    <Route exact path="/locations" component={Locations} />
    <Route exact path="/contact" component={Contact} />
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
