import { Fragment } from "react";
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.scss"; 

const NavBar = () =>{

    return(
        <Fragment>
            <header>
                <h1 className="brand">E<span className="sub-h1">scent</span>ially</h1>
                
                <nav>
                    <ul>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">Products</a> </li>
                        <li> <a href="#">Contact</a> </li>
                        <li> <CartWidget /> </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
}

export default NavBar;