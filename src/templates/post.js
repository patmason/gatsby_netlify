import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout'

const Post = ({ data }) => {
  return (
    <Layout>
      <h1>{data.file.childMarkdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.file.childMarkdownRemark.html}} />
    </Layout>
  )
}

export default Post
export const query = graphql`
query($relPath: String){
  file(relativePath:{eq: $relPath}) {
    childMarkdownRemark {
      html
      frontmatter {
        title
      }
    }
  }
}
`