import { Fragment } from "react";
import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.scss"; 
import {Link} from 'react-router-dom';
import { Dropdown } from "react-bootstrap";

const NavBar = () =>{

    return(
        <Fragment>
            <header>
                <Link to="/" className="link"> <h1 className="brand">E<span className="sub-h1">scent</span>ially</h1> </Link> 
                
                <nav>
                    <ul>
                        <li> <Link to="/" > Home </Link> </li>

                        <li> 
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <p className="dropdown-name">Products</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item key="all" > <Link to="/" className="dropdownLink"> All products </Link> </Dropdown.Item>
                                    <Dropdown.Item key="masculine" > <Link to="category/masculine" className="dropdownLink"> Masculine Perfumes </Link> </Dropdown.Item>
                                    <Dropdown.Item key="femenine"> <Link to="category/femenine" className="dropdownLink"> Femenine Perfumes </Link> </Dropdown.Item>
                                    
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li> <Link to="" > Contact </Link> </li>
                        <li> <Link to="/cart" > <CartWidget /> </Link> </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
}

export default NavBar;
