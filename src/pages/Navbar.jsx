import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
        <div className="navbar">
            <div className="logo">Front<span>developer</span></div>
             <div className="nav">
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Projects'>Projects</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
              </ul>
             </div>
        </div>
     
  );
}

export default Navbar;
