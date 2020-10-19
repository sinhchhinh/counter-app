import React, { Component } from 'react';
//Stateless Functional Component
//Object destructuring 
/// ({totalCounters}) = (props.totalCounters)
const NavBar = ({totalCounters}) =>{
    return ( 
            <nav className="navbar navbar-lighgt bg-light">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pil bade-secondary">
                        {totalCounters}
                    </span>
                </a>
            </nav>
         );
};

export default NavBar;