import React from "react";
import "./style.css";

interface PageTemplateProps {
    children: React.ReactNode
}

const PageTemplate = (props: PageTemplateProps) => {
    return (
        <section className="homeSection">
            {props.children}
        </section>
    )}

export default PageTemplate
