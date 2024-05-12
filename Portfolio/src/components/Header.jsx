import avatarIMG from "../assets/images/Avatar2.PNG";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header>
            <div className="avatar">
                <img src={avatarIMG} alt="avatar"></img>
                <h1>Dinh Nguyen</h1>
            </div>
            <nav>
                <a href="/aboutMe">About me</a>
                <Link to="/portfolio">Portfolio</Link>
                <a href="/education">Education</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
};