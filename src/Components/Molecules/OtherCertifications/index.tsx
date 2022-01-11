import SectionHeader from "../../Atoms/SectionHeader";
import './style.css';
import {formatDate} from '../../Utilities/FormatDate'

import {useState, useEffect} from "react";

interface StateProperties {
    name: string;
    certifier: string;
    date_achieved: string;
}

const OtherCertifications = () => {
    const [otherCertificationsData, setOtherCertificationsData] = useState<StateProperties[]>([]);
    async function getOtherCertificationData() {
        let response = await fetch('https://portfolio-restful-api.2021-eleanorr.dev.io-academy.uk/other-certifications');
        setOtherCertificationsData(await response.json());
    }

    useEffect(() => {
        getOtherCertificationData()
    }, []);

    return (
        <section className="otherCertifications">
            <SectionHeader title={"Other Certifications"} />
            {otherCertificationsData.map(({name, certifier, date_achieved}) => (
                <div key={name}>
                    <p>{name} {certifier ? ': ' + certifier : ''} {date_achieved ? '- ' + formatDate(date_achieved) : ''} </p>
                </div>
            ))}
        </section>
    )}

export default OtherCertifications
