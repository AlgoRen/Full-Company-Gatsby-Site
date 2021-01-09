import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const article = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{article.frontmatter.title}</h1>
      <h4>
        Posted by {article.frontmatter.author} on {article.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: article.html }}></div>
    </div>
  )
}

export const articleQuery = graphql`
  query ArticlePostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
