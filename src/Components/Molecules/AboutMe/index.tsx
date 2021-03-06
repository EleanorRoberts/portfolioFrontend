import './style.scss';
import {useState, useEffect} from "react";
import {formatTitle} from "../../Utilities/FormatTitle";
import SectionHeader from "../../Atoms/SectionHeader";

interface StateProperties {
    name: string;
    description: string;
}

const AboutMe = () => {
    const [aboutMeData, setAboutMeData] = useState<StateProperties[]>([]);
    async function getAboutMeData() {
        let response = await fetch('https://portfolio-restful-api.2021-eleanorr.dev.io-academy.uk/about-me');
        setAboutMeData(await response.json());
    }
    useEffect(() => {
        getAboutMeData()
    }, []);

    return (
        <section className="aboutMe">
            {aboutMeData.map(({name, description}) => (
                <div key={name}>
                    <SectionHeader title={formatTitle(name)} />
                    <p>{description}</p>
                </div>
            ))}
        </section>
    )}

export default AboutMe
