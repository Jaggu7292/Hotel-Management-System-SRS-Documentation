import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="lightblue" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                {/* <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink> */}
                <NavLink className="d-inline p-2 bg-dark text-white" to="/SearchRoom">
                    SearchRoom
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Aboutus">
                    Aboutus
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/logout">
                    logout
                </NavLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}