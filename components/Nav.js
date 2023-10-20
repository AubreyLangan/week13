import React, { Component } from "react";
import '../App.css'

class Navbar extends Component {
    render() {
        return (
           <nav>
            <ul>
                <li>Home</li>
                <li>Sign Up</li>
                <li>Log In</li>
            </ul>
           </nav> 
        )
    }
}

export default Navbar;