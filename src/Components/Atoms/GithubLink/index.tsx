
interface GithubProps {
    url: string;
    plusClass?: string;
}

const GithubLink = (props: GithubProps) => {
    return <a href={props.url} target="_blank" rel="noreferrer" className={"fab fa-github " + props.plusClass} ></a>
}

export default GithubLink
