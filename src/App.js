import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './components/List';
import HightChart from './components/HightChart';
import PieChart from './components/PieChart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Header />
          </div>
          <Route path="/" exact component={List} />
          <Route path="/List" exact component={List} />
          <Route path="/Bar-chart" component={HightChart} />
          <Route path="/Pie-chart" component={PieChart} />
        </div>
      </Router>
    );
  }
}

export default App;
