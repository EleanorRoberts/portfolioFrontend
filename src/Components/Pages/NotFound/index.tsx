import whereArtThouRomeowmmy from './whereArtThouRomeowmmy.png';
import './style.scss';
import PageHeader from "../../Atoms/PageHeader";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        // Header
        <section id="notFound">
            <PageHeader title="Oh no! Page not found :(" />
            <img src={whereArtThouRomeowmmy} alt="Dude the cat looking for his much doting meow-mmy" id="catImage"/>
            <Link to="/" id="goHome" >Go back home</Link>
        </section>
    )}

export default NotFound
