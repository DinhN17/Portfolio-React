import { useState, useEffect } from "react";
import Card from "../components/Card";
import API from "../utils/API";

export default function Portfolio() {
    const [projects, setProjects] = useState([]);

    // There is no backend at the moment, so use data from portfolio.json
    const getProjects = async () => {
        const { data } = await API.getProjects();
        // console.log(data);
        setProjects(data);
    };

    useEffect(() => {
        getProjects();
    }, []);


    return (
        <section>
            <h2>Portfolio</h2>
            <div className="main-content">
                {projects.map((project) => (
                    <Card key={project.id} {...project} />
                ))}
            </div>

        </section>
    );
}