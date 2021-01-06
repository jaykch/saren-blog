import React from 'react';
import './blog-post.css';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import {graphql} from 'gatsby'
import PrevNext from '../components/prevnext';
import MetaTags from '../components/Metatags';
//import Share from '../components/share';
import {BsFillCalendarFill, BsFillPersonFill} from 'react-icons/bs';

function BlogPost(props) {

    const url = props.data.site.siteMetadata.siteUrl
    const thumbnail = props.data.markdownRemark.frontmatter.image &&
        props.data.markdownRemark.frontmatter.image.childImageSharp
    const {title, image, tags, author, date} = props.data.markdownRemark.frontmatter;
    const {prev, next} = props.pageContext;
    return (
        <Layout>
            <MetaTags
                title={title}
                description={props.data.markdownRemark.excerpt}
                thumbnail={thumbnail && url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div className="post">
                <h1 className="title">{title}</h1>
                <div className="tags-container">
                    [{tags.map((tag, i) => (
                    <a href={`/${tag}`} key={i} className="tag">{tag}</a>
                ))}]
                </div>
                <div className="subtitle">
                    <span><BsFillPersonFill/>{author}</span>
                    <span><BsFillCalendarFill/>{new Date(date).toLocaleDateString("en-US",{ weekday: "short", year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                {image && <Img fluid={image.childImageSharp.fluid}/>}
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}/>
                <PrevNext prev={prev && prev.node} next={next && next.node}/>
            </div>
        </Layout>
    )
}


export default BlogPost

export const query = graphql`

 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       frontmatter {
        title
        tags
        author
        date
        image {
          childImageSharp {
            fluid(maxWidth: 786, maxHeight: 420, quality:90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
       }
   }
   site {
    siteMetadata {
        siteUrl
      }
   }
}
`