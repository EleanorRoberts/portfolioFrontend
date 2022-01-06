import './style.css';

interface PageHeaderProps {
    title: string
}

const PageHeader = (props: PageHeaderProps) => <h1>{props.title}</h1>

export default PageHeader