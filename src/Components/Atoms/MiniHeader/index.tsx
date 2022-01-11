import './style.scss';

interface MiniHeaderProps {
    title: string
}

const MiniHeader = (props: MiniHeaderProps) => <h3>{props.title}</h3>

export default MiniHeader