import MiniHeader from "../../Atoms/MiniHeader";
import "./style.scss";
import ProjectLinks from "../ProjectLinks";

interface ProjectProps {
    name: string;
    about: string;
    github_link: string;
    live_version: string;
}


const ProjectCard = (props: ProjectProps) => {
    return (
        <div className="projectCard">
            <MiniHeader title={props.name} />
            <p>{props.about}</p>
            <ProjectLinks githubLink={props.github_link} liveVersion={props.live_version} />
        </div>
    )}

export default ProjectCard
