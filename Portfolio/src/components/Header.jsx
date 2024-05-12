import avatarIMG from "../assets/images/Avatar2.PNG"
export default function Header() {
    return (
        <header>
            <div className="avatar">
                <img src={avatarIMG} alt="avatar"></img>
                <h1>Dinh Nguyen</h1>
            </div>
            <nav>
                <a href="/aboutMe">About me</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/education">Education</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}