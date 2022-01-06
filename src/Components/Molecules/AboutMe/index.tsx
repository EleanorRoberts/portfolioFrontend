import MiniHeader from "../../Atoms/MiniHeader";
import './style.css';
import {useState, useEffect} from "react";

interface StateProperties {
    name: string;
    description: string;
}

const AboutMe = () => {
    const [aboutMeData, setAboutMeData] = useState<StateProperties[]>([]);
    async function getAboutMeData() {
        let response = await fetch('https://restful-cv-api.2021-eleanorr.dev.io-academy.uk/about-me');
        setAboutMeData(await response.json());
    }
    useEffect(() => {
        getAboutMeData()
    }, []);

    return (
        <section className="aboutMe">
            {aboutMeData.map(({name, description}) => (
                <div key={name}>
                    <MiniHeader title={name} />
                    <p>{description}</p>
                </div>
            ))}
        </section>
    )}

export default AboutMe
