import {Link} from "react-router-dom";

interface IconLinkProps {
    to: string
    iconText: string
}

const IconLink = (props: IconLinkProps) => {
    return (
        <Link to={props.to} className={"fas fa-" + props.iconText}></Link>
)}

export default IconLink