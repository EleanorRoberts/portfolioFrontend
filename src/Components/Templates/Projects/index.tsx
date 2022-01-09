import {useState, useEffect} from "react";
import './style.css';
import PageHeader from "../../Atoms/PageHeader";
import ProjectCard from "../../Molecules/ProjectCard";

interface ProjectProperties {
    name: string;
    about: string;
    github_link: string;
    live_version: string;
}

const Projects = () => {
    const [projectsData, setProjectsData] = useState<ProjectProperties[]>([]);
    async function getProjectsData() {
        let response = await fetch('https://portfolio-restful-api.2021-eleanorr.dev.io-academy.uk/projects');
        setProjectsData(await response.json());
    }
    useEffect(() => {
        getProjectsData();
    }, []);

    return (
        <section className="projects">
            <PageHeader title={"Projects"} />
            {projectsData.map((project: ProjectProperties) => {
                return <ProjectCard name={project.name} key={project.name} about={project.about} github_link={project.github_link} live_version={project.live_version} />
            })}
        </section>
    )}

export default Projects