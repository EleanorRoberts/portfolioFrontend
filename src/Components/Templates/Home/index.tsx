import AboutMe from "../../Molecules/AboutMe";
import Hobbies from "../../Molecules/Hobbies";
import OtherCertifications from "../../Molecules/OtherCertifications";
import PageTemplate from "../PageTemplate";
import ContactMe from "../../Molecules/ContactMe";

const Home = () => {
    return (
        // Header
        <PageTemplate>
            <AboutMe />
            <Hobbies />
            <OtherCertifications />
            <ContactMe />
        </PageTemplate>
    )}

export default Home
