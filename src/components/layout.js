import React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks{
            name
            link
            }
          }
        }
      }
    `}
        render={data => (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        {name: 'description', content: 'Get the latest news on Saren and all our projects.'},
                    ]}
                >
                    <html lang="en"/>
                </Helmet>
                <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks}/>
                <div
                    style={{
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '0px 1.0875rem 1.45rem',
                        paddingTop: 0,
                    }}
                >
                    {children}
                </div>
                <footer>
                    <span>©{new Date().getFullYear()} Saren.io | Cryptocurrency financial tools</span>
                </footer>
            </>
        )}
    />
)


export default Layout
