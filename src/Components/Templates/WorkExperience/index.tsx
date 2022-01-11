import PageHeader from "../../Atoms/PageHeader";
import MiniHeader from "../../Atoms/MiniHeader";
import "./style.css";
import {useState, useEffect} from "react";
import {formatDate} from "../../Utilities/FormatDate";

interface WorkExperienceProperties {
    company: string;
    position: string;
    start_date: string;
    leave_date: string;
    about: string;
}

const WorkExperience = () => {
    const [workExperienceData, setWorkExperienceData] = useState<WorkExperienceProperties[]>([]);

    async function getWorkExperienceData() {
        let response = await fetch('https://portfolio-restful-api.2021-eleanorr.dev.io-academy.uk/work-experience');
        setWorkExperienceData(await response.json());
    }
    useEffect(() => {
        getWorkExperienceData()
    }, []);

    return (
        <section className="workExperience">
            <PageHeader title={"Work Experience"} />
            {workExperienceData.map(({company, position, start_date, leave_date, about}) => {
                return (
                        <div key={company+position} className="roleCard">
                            <MiniHeader title={position} />
<<<<<<< HEAD
                            <p className="roleDetails">{company} {start_date ? ': ' + formatDate(start_date) + ' to ' + formatDate(leave_date) : ''}</p>
=======
                            <p className="roleDetails">{company} {start_date ? ': ' + formatDate(start_date) + ' to ' + leave_date : ''}</p>
>>>>>>> 3582aced85c57e3b5ff94defcd947729c32ed504
                            <p>{about ?? ''}</p>
                        </div>
                    )
            })}
        </section>
    )}

export default WorkExperience
