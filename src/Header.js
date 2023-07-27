import React from 'react'; //If you wish to use class component here, you need to import React, {Component} also.. Because all component classes should extend Componen class.

const Header = function() {
    const headerStyle = {
        textAlign:'center',
        padding:20,
        background:'#000',
        color:'#fff',
        textTransform:'uppercase'
    };
    return(
        <div style={headerStyle}>
          Phone Directory
        </div>
    )
};

export default Header;