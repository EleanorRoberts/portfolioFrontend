
interface LiveProps {
    url: string;
    plusClass?: string;
}

const LiveLink = (props: LiveProps) => {
    return <a href={props.url} target="_blank" rel="noreferrer" className={"liveVersion " + props.plusClass}>LIVE</a>
}

export default LiveLink
