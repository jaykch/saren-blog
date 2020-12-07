import React from 'react';
import "./prevnext.css"

const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul className="prevNext">
            {prev && <li><a href={prev.fields.slug}>
                Previous {" "}
                {prev.frontmatter.title}</a></li>}
            {next && <li><a href={next.fields.slug}>
                Next  {" "} {next.frontmatter.title}

            </a></li>}
        </ul>
    )
}

export default PrevNext;