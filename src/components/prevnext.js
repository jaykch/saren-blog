import React from 'react';
import './prevnext.css'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';

const PrevNext = (props) => {

    const {prev, next} = props

    return (
        <ul className="prevNext">
            {prev && <li>
                <a href={prev.fields.slug}>
                    <AiOutlineLeft/><strong>Previous:</strong>
                    {prev.frontmatter.title}
                </a></li>}
            {next && <li>
                <a href={next.fields.slug}>
                    <strong>Next:</strong> {next.frontmatter.title}<AiOutlineRight/>
                </a>
            </li>}
        </ul>
    )
}

export default PrevNext;