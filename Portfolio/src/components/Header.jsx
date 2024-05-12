import React from 'react';
import avatarIMG from "../assets/images/Avatar2.PNG"
export default function Header() {
    return (
        <header>
            <div class="avatar">
                <img src={avatarIMG} alt="avatar"></img>
                <h1>Dinh Nguyen</h1>
            </div>
            <nav>
                <a href="#About-me">About me</a>
                <a href="#Work">Work</a>
                <a href="#Education">Education</a>
                <a href="#Contact">Contact</a>
            </nav>
        </header>
    );
}