import { Fragment } from "react";

const NavBar = () =>{

    return(
        <Fragment>
            <header>
                <h1 className="brand">The Hammy Store</h1>

                <nav>
                    <ul>
                        <li> <a href="">Productos</a> </li>
                        <li> <a href="">Contacto</a></li>
                        <li> <a href="">Preguntas frecuentes</a></li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default NavBar;