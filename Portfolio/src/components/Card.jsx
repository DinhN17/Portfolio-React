export default function card({title, description, image, link, githubLink}) {
    return (
        <div className="card">
            <div className="d-flex flex-row">
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="fa fa-github fa-github-card"></a>
            </div>
            <img src={image} alt="Project Screenshot"></img>
            <p>{description}</p>
        </div>
    )    
}