import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light d-flex flex-row justify-content-start">
          <a className="navbar-brand" href="#">React E-Store</a>
            <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </nav>
    );
};

export default NavBar;