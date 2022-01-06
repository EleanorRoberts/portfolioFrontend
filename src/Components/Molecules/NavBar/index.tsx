import './style.css';
import IconLink from '../../Atoms/IconLink';
import PDF from './eleanor-roberts-cv.pdf';

const NavBar = () => {
    return (
        <nav>
            <div className={"navLinks"}>
                <IconLink to="/" iconText={"igloo"} />
                <IconLink to="/work-experience" iconText={"cogs"} />
                <IconLink to="/projects" iconText={"thumbtack"} />
                <a href={PDF} download>CV</a>
            </div>
            <p>Eleanor Roberts</p>
        </nav>
    )}

export default NavBar