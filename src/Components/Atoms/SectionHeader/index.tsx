import './style.css';

interface SectionHeaderProps {
    title: string
}

const SectionHeader = (props: SectionHeaderProps) => <h2>{props.title}</h2>

export default SectionHeader