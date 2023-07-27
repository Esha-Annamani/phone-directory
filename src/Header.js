import React from 'react'; //If you wish to use class component here, you need to import React, {Component} also.. Because all component classes should extend Componen class.

const Header = function() {
    return(
        <div className="header">
          Phone Directory
        </div>
    )
};

export default Header;