import React from "react";

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
