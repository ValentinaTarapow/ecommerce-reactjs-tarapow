import { Fragment } from "react";
import "./Footer.scss"; 
import { Container } from 'react-bootstrap'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

export const Footer = () =>{
    return(
    <footer className="footer w-100">
        <div>
            <h4>Contacto</h4>
            <h5></h5>

            <p><AiOutlinePhone /> +54 9 1169972991</p>
            <p><AiOutlineMail /> valentinadct@gmail.com</p>
        </div>
    </footer>

    )
}