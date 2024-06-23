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
                <Link to="/aboutMe">About me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/education">Education</Link>
                <Link target={"_blank"} to="https://docs.google.com/document/d/1jCOk95NKt62K4cYiO8cE11RmVoeCN8Xx/edit?usp=sharing&ouid=104967400233526412202&rtpof=true&sd=true">Resume</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}