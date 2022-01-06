import LiveLink from "../../Atoms/LiveLink";
import GithubLink from "../../Atoms/GithubLink";

interface LinkProps {
    githubLink: string;
    liveVersion: string;
}

const projectLinks = (props: LinkProps) => {
    let githubButton;
    let liveVersionButton;
    if (props.githubLink !== null) {
        githubButton = <GithubLink url={props.githubLink} />;
    } else {
        githubButton = <GithubLink url={props.githubLink} plusClass='disabled-link' />;
    }
    if (props.liveVersion !== null) {
        liveVersionButton = <LiveLink url={props.liveVersion} />;
    } else {
        liveVersionButton = <LiveLink url={props.liveVersion} plusClass='disabled-link' />;
    }
    return (
        <div className="projectLinks">
            {githubButton}
            {liveVersionButton}
        </div>
    )
}

export default projectLinks