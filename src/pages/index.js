import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Foo</h1>
    <p>{data.site.siteMetadata.bar}</p>
    <ul>
      {data.allFile.edges.map(({node}) => {
        return (
          <li key={node.name}>
            <Link to={node.name}>{node.childMarkdownRemark.frontmatter.title}</Link>
          </li>
        )
      })}
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
export const query = graphql`
{
  site {
    siteMetadata {
      bar
      description
    }
  }
  allFile(filter: {extension: {eq: "md"}}) {
    edges {
      node {
        relativePath
        name
        childMarkdownRemark {
          frontmatter {
            title
          }
        }
      }
    }
  }
}
`
