import AboutMe from "../../Molecules/AboutMe";
import Hobbies from "../../Molecules/Hobbies";
import OtherCertifications from "../../Molecules/OtherCertifications";
import PageTemplate from "../PageTemplate";
import HomeImage from "../../Atoms/HomeImage";
import CodingTypewriter from "../../Atoms/CodingTypewriter";

const Home = () => {
    return (
        // Header
        <PageTemplate>
            <HomeImage />
            <CodingTypewriter />
            <AboutMe />
            <Hobbies />
            <OtherCertifications />
        </PageTemplate>
    )}

export default Home
