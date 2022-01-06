import './style.css';
import SectionHeader from "../../Atoms/SectionHeader";

const ContactMe = () => {
    return (
        <section className="contactMe">
                <div>
                    <SectionHeader title="Contact Me" />
                    <div className="mediaLinks">
                        <a href="https://www.linkedin.com/in/eleanor-roberts-80117a16a/" target="_blank" rel="noreferrer" className="fab fa-linkedin"></a>
                        <a href="mailto:eleanorlroberts@googlemail.com" target="_blank" rel="noreferrer" className="fas fa-envelope-square"></a>
                        <a href="https://github.com/EleanorRoberts" target="_blank" rel="noreferrer" className="fab fa-github"></a>
                    </div>
                </div>
        </section>
    )}

export default ContactMe
