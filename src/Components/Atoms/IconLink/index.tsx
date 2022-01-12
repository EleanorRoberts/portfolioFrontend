import {Link} from "react-router-dom";

interface IconLinkProps {
    to: string
    iconText: string
    linkText?: string
    active?: string
}

const IconLink = (props: IconLinkProps) => {
    return (
        <Link to={props.to} className={"fas fa-" + props.iconText + ' ' + props.active}>{props.linkText}</Link>
)}

export default IconLink