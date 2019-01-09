import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <nav className=" navbar-inverse">
      <div className="container-fluid">
          <div className="navbar-nav">
            <ul className="nav navbar-nav">
              <li className="active"><a href="List">User Manager</a></li>
              <li><a href="Pie-chart">Pie Chart</a></li>
              <li><a href="Bar-chart">Bar Chart</a></li>
            </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default Header;
