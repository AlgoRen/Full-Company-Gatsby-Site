import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const ArticlesPage = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <h1>Articles by FULL Company </h1>
    <p>The start of something great.</p>
    <h2>Latest Posts</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {data.allMarkdownRemark.edges.map(article => (
        <div key={article.node.id}>
          <h3>{article.node.frontmatter.title}</h3>
          <small>
            Article by {article.node.frontmatter.author} on{" "}
            {article.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={article.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export const pageQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default ArticlesPage
