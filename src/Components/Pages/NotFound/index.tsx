import PageTemplate from "../../Templates/PageTemplate";
import whereArtThouRomeowmmy from './whereArtThouRomeowmmy.png';
import PageHeader from "../../Atoms/PageHeader";

const NotFound = () => {
    return (
        // Header
        <PageTemplate>
            <PageHeader title="Oh no! Page not found :(" />
            <img src={whereArtThouRomeowmmy} alt="Dude the cat looking for his doting meow-mmy"/>
        </PageTemplate>
    )}

export default NotFound
