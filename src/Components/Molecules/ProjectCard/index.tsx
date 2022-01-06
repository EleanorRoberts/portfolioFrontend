import MiniHeader from "../../Atoms/MiniHeader";
import './style.css';

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
            <div className="projectLinks">
                <a href={props.github_link} target="_blank" rel="noreferrer" className="fab fa-github"></a>
                <a href={props.live_version} target="_blank" rel="noreferrer" className="liveVersion">LIVE</a>
            </div>
        </div>
    )}

export default ProjectCard
