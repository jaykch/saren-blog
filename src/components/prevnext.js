import React from 'react';
import './prevnext.css'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';

const PrevNext = (props) => {

    const {prev, next} = props

    return (
        <ul className="prevNext">
            {next && <li>
                <a href={next.fields.slug}>
                    <AiOutlineLeft/><strong>Previous:</strong>
                    {next.frontmatter.title}
                </a>
            </li>}
            {prev && <li>
                <a href={prev.fields.slug}>
                    <strong>Next:</strong>{prev.frontmatter.title}<AiOutlineRight/>
                </a></li>}
        </ul>
    )
}

export default PrevNext;