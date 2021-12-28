import "./Footer.scss";
import React from "react"; 
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";


export const Footer = () =>{
    return(
    <footer className="footer p-4 w-100 d-flex flex-row justify-content-between">
        <div className="text-center">
            <h4 className="mb-4">Contact Us</h4>
            <p><AiOutlinePhone /> +54 9 1169972991</p>
            <p><AiOutlineMail /> valentinadct@gmail.com</p>
        </div>

        <div className="text-center">
            <h4 className="mb-4">Escentially</h4>
            <p>Perfuming your dreams since 2021</p>
        </div>

        <div className="text-center">
            <h4 className="mb-4">Credits</h4>
            <p>Made with < FaRegHeart className="heart"/> by Valentina Tarapow</p>
            <div className="d-flex justify-content-center">
                <a href="https://github.com/ValentinaTarapow" className="me-2"><AiOutlineGithub  size={24}/></a>
                <a href="https://www.linkedin.com/in/valentina-tarapow/"><AiFillLinkedin  size={24}/></a>
            </div>

        </div>
    </footer>

    )
}