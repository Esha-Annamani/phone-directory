import React from 'react'; //If you wish to use class component here, you need to import React, {Component} also.. Because all component classes should extend Componen class.
import "./Header.css"

const Header = function(props) {
    return(
        <div className='header'>
          {props.heading}
        </div>
    )
};

export default Header;