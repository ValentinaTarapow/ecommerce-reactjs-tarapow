import "./Page404.scss";
import React from "react"; 
import { Link } from "react-router-dom";
import { FaRegHandPointDown } from "react-icons/fa";

export const Page404 = () => {
    return(
        <>
            <section id="page404" className="my-5 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center">
                    <h4>404</h4>
                    <p>Oops! You seem to be lost </p>
                    <p className="redirect">No problem <FaRegHandPointDown /> </p>
                </div>
            
            <Link to="/"><btn className="btn btn-secondary">Go Home</btn></Link>
            </section>
        </>
    )
}