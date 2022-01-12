import './style.scss';
import IconLink from '../../Atoms/IconLink';
import PDF from './eleanor-roberts-cv.pdf';
import {useLocation} from "react-router-dom";

const NavBar = () => {
    function activeClass(pathTo: string, location: string) {
        return (location === pathTo);
    }
    return (
        <nav>
            <div className={"navLinks"}>
                <IconLink to="/" iconText={"igloo"} active={activeClass("/", useLocation().pathname) ? 'active' : ''} />
                <IconLink to="/work-experience" iconText={"cogs"}  active={activeClass("/work-experience", useLocation().pathname) ? 'active' : ''} />
                <IconLink to="/projects" iconText={"thumbtack"}  active={activeClass("/projects", useLocation().pathname) ? 'active' : ''} />
                <a href={PDF} download>CV</a>
            </div>
            <p>Eleanor Roberts</p>
        </nav>
    )}

export default NavBar