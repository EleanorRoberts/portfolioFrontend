import './style.scss';

interface GithubProps {
    url: string;
    plusClass?: string;
}

const GithubLink = (props: GithubProps) => {
    if (props.url !== null) {
        let split = props.url.split(', ');
        if (split.length !== 1) {
            return (
                <div className="githubLinks">
                    <a href={split[0]} target="_blank" rel="noreferrer" className={"fab fa-github " + props.plusClass} ></a>
                    <a href={split[1]} target="_blank" rel="noreferrer" className={"fab fa-github " + props.plusClass} ></a>
                </div>
            )
        }
    }
    return <a href={props.url} target="_blank" rel="noreferrer" className={"fab fa-github " + props.plusClass} ></a>
}

export default GithubLink
