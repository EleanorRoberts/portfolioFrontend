import SectionHeader from "../../Atoms/SectionHeader";
import './style.scss';
import {useState, useEffect} from "react";

interface StateProperties {
    name: string;
}

const Hobbies = () => {
    const [hobbiesData, setHobbiesData] = useState<StateProperties[]>([]);
    async function getHobbiesData() {
        let response = await fetch('https://portfolio-restful-api.2021-eleanorr.dev.io-academy.uk/hobbies')
        setHobbiesData(await response.json())
    }
    useEffect(() => {
        getHobbiesData()
    }, []);

    return (
        <section className="hobbies">
            <SectionHeader title={"Hobbies"} />
            <ul>
                {hobbiesData.map(({name}) => <li key={name}>{name}</li>
                )}
            </ul>
        </section>
    )}

export default Hobbies
