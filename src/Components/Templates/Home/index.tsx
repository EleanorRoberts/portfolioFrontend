import AboutMe from "../../Molecules/AboutMe";
import Hobbies from "../../Molecules/Hobbies";
import OtherCertifications from "../../Molecules/OtherCertifications";
import PageTemplate from "../PageTemplate";
import ContactMe from "../../Molecules/ContactMe";
import HomeImage from "../../Atoms/HomeImage";

const Home = () => {
    return (
        // Header
        <PageTemplate>
            <HomeImage />
            <AboutMe />
            <Hobbies />
            <OtherCertifications />
            <ContactMe />
        </PageTemplate>
    )}

export default Home
