import { MdLocalShipping } from "react-icons/md";
import React from "react";
import './Banner.scss'; 

export const Banner = () => {

    return(
        <div className="banner">
            <p>free shipping to the whole country <MdLocalShipping /></p>
        </div>
    )
}